import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './ChildhoodB.module.scss'
import * as language from './ChildhoodB_lang'
import { Parallax } from 'react-scroll-parallax'
import BoyWithPagoda from '@/assets/img/ChildhoodB_BoyWithPagoda.png'
import YoungManDrawing from '@/assets/img/ChildhoodB_YoungManDrawing.png'
import SouthVietnameseTroopsInCambodia from '@/assets/img/ChildhoodB_SouthVietnameseTroopsInCambodia.jpg'
import useSound from 'use-sound'
import BackgroundTraditionalSound from '@/assets/sounds/background_music_traditionalFlute.mp3'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
  soundEnabled: boolean
  fadingTime: number
}

const ChildhoodB = (props: Props) => {
  const CHAPTER_ID: Chapter = 'CHILDHOOD_B'

  const topRef = React.useRef<HTMLInputElement>(null)
  const bottomRef = React.useRef<HTMLInputElement>(null)
  const topOnScreen = useOnScreen(topRef, '-350px')
  const bottomOnScreen = useOnScreen(bottomRef, '-350px')
  useEffect(() => {
    topOnScreen && props.setCurrentChapter(CHAPTER_ID)
  }, [topOnScreen])
  useEffect(() => {
    bottomOnScreen && props.setCurrentChapter(CHAPTER_ID)
  }, [bottomOnScreen])

  // ---------------------- SOUND IMPLEMENTATION ---------------------- //
  const [play, { sound, stop }] = useSound(BackgroundTraditionalSound, {
    interrupt: true,
    loop: true,
  })

  useEffect(() => {
    if (topOnScreen && props.soundEnabled) {
      props.setCurrentChapter(CHAPTER_ID)
      play()
      sound.fade(0, 0.5, props.fadingTime)
    } else {
      if (sound && (!topOnScreen || !props.soundEnabled)) {
        sound.once('fade', () => {
          stop()
        })
        sound.fade(0.5, 0, props.fadingTime)
      }
    }
  }, [topOnScreen, props.soundEnabled])
  // ---------------------- SOUND IMPLEMENTATION ---------------------- //

  return (
    <div ref={topRef} id={CHAPTER_ID}>
      <div className={'header-outer'}>
        <div className='header-inner'>
          <h2 className={classNames(classes.heading, 'chapter-heading')}>
            {CHAPTERS.get(CHAPTER_ID)?.title}
          </h2>
        </div>
      </div>
      <div className='chapter-body-wrapper'>
        <div className={classes.section}>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T1_Geburt}</p>
          <Parallax speed={5}>
            <img
              src={BoyWithPagoda}
              alt='Testbild'
              className={classNames(classes.img, classes.rotateRight)}
              title='KI-generiertes Bild (labs.openai.com)'
            />
          </Parallax>
        </div>
        <div className={classNames(classes.section, classes.rightAlign)}>
          <div className={classNames('imgContainerWithTape', 'tape4')}>
            <img
              src={YoungManDrawing}
              alt='Testbild'
              className={classNames(classes.img, classes.rotateLeft)}
              title='KI-generiertes Bild (labs.openai.com)'
            />
          </div>
          <div className={classes.sectionColumn}>
            <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T2_Pagode}</p>
            <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T3_Tischler}</p>
          </div>
        </div>
        <div className={classes.section}>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T4_Heimat}</p>
          <Parallax
            speed={15}
            easing='easeOutExpo'
            rootMargin={{ top: 0, right: 100, bottom: 4000, left: 100 }}
          >
            <img
              src={SouthVietnameseTroopsInCambodia}
              alt='Testbild'
              className={classNames(classes.img, classes.rotateRight)}
              title='Südvietnamesische Truppen werden nach einer Militäroperation in der Nähe von Prey Veng (Kambodscha) von einem Hubschrauber geborgen, Quelle: https://www.historynet.com/nixons-cambodian-incursion/'
            />
          </Parallax>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default ChildhoodB
