import { useState, useEffect, useRef, useCallback } from 'react'
import styles from './Terminal.module.css'

const COMMAND = 'npx pedro-goulart'

type Line =
  | { kind: 'empty' }
  | { kind: 'name'; text: string }
  | { kind: 'role'; text: string }
  | { kind: 'info'; word: string; value: string }
  | { kind: 'success'; text: string }

const LINES: Line[] = [
  { kind: 'empty' },
  { kind: 'name', text: 'Pedro Goulart' },
  { kind: 'empty' },
  { kind: 'info', word: 'stack   ', value: 'React · TypeScript · Node.js' },
  { kind: 'info', word: 'foco    ', value: 'Automação · IA · Fullstack' },
  { kind: 'info', word: 'status  ', value: 'Aberto a oportunidades' },
  { kind: 'info', word: 'projetos', value: '20+ publicados' },
  { kind: 'info', word: 'local   ', value: 'Rio de Janeiro, BR' },
  { kind: 'empty' },
  { kind: 'success', text: '✓ Pronto para novos desafios.' },
]

type Phase = 'idle' | 'typing' | 'revealing' | 'done'

interface Props {
  onComplete?: () => void
  replay?: boolean
}

export default function Terminal({ onComplete, replay = false }: Props) {
  const [phase, setPhase] = useState<Phase>('idle')
  const [typed, setTyped] = useState(0)
  const [shown, setShown] = useState(0)
  const [cursorOn, setCursorOn] = useState(true)
  const timerIds = useRef<ReturnType<typeof setTimeout>[]>([])
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  const clearTimers = useCallback(() => {
    timerIds.current.forEach(clearTimeout)
    timerIds.current = []
  }, [])

  const startAnimation = useCallback(() => {
    clearTimers()
    setPhase('idle')
    setTyped(0)
    setShown(0)
    setCursorOn(true)

    const T_TYPE = 1000
    const T_REVEAL = T_TYPE + COMMAND.length * 60 + 500

    timerIds.current.push(setTimeout(() => setPhase('typing'), T_TYPE))

    for (let i = 1; i <= COMMAND.length; i++) {
      timerIds.current.push(
        setTimeout(() => setTyped(i), T_TYPE + i * 60)
      )
    }

    timerIds.current.push(setTimeout(() => setPhase('revealing'), T_REVEAL))

    LINES.forEach((_, j) => {
      timerIds.current.push(
        setTimeout(() => setShown(j + 1), T_REVEAL + j * 150)
      )
    })

    timerIds.current.push(
      setTimeout(() => {
        setPhase('done')
        onCompleteRef.current?.()
      }, T_REVEAL + LINES.length * 150)
    )
  }, [clearTimers])

  useEffect(() => {
    startAnimation()
    return clearTimers
  }, [startAnimation, clearTimers])

  useEffect(() => {
    const id = setInterval(() => setCursorOn(v => !v), 530)
    return () => clearInterval(id)
  }, [])

  function renderLine(line: Line, i: number) {
    switch (line.kind) {
      case 'empty':
        return <div key={i} className={styles.emptyLine} aria-hidden="true" />
      case 'name':
        return <div key={i} className={styles.lineName}>  {line.text}</div>
      case 'role':
        return <div key={i} className={styles.lineRole}>  {line.text}</div>
      case 'info':
        return (
          <div key={i} className={styles.lineInfo}>
            <span className={styles.infoArrow}>  → </span>
            <span className={styles.infoWord}>{line.word}  </span>
            <span className={styles.infoValue}>{line.value}</span>
          </div>
        )
      case 'success':
        return <div key={i} className={styles.lineSuccess}>  {line.text}</div>
    }
  }

  return (
    <div
      className={styles.terminal}
      role="img"
      aria-label="Terminal interativo: Pedro Goulart, desenvolvedor fullstack, stack React TypeScript Node.js, disponível para oportunidades no Rio de Janeiro"
      onClick={replay ? startAnimation : undefined}
      title={replay ? 'Clique para reiniciar' : undefined}
      data-replay={replay}
    >
      <div className={styles.titleBar} aria-hidden="true">
        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.dotRed}`} />
          <span className={`${styles.dot} ${styles.dotYellow}`} />
          <span className={`${styles.dot} ${styles.dotGreen}`} />
        </div>
        <span className={styles.titleText}>terminal</span>
        <div className={styles.titleSpacer} />
      </div>

      <div className={styles.body}>
        <div className={styles.promptLine}>
          <span className={styles.prompt}>visitor@portfolio:~$&nbsp;</span>
          {phase !== 'idle' && (
            <span className={styles.command}>{COMMAND.slice(0, typed)}</span>
          )}
          {(phase === 'idle' || phase === 'typing') && (
            <span className={`${styles.cursor} ${cursorOn ? styles.cursorOn : ''}`} />
          )}
        </div>

        {LINES.slice(0, shown).map((line, i) => renderLine(line, i))}

        {phase === 'done' && (
          <div className={styles.promptLine}>
            <span className={styles.prompt}>visitor@portfolio:~$&nbsp;</span>
            <span className={`${styles.cursor} ${cursorOn ? styles.cursorOn : ''}`} />
          </div>
        )}
      </div>
    </div>
  )
}
