import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './PreInvasionB.module.scss'
import * as language from './PreInvasionB_lang'
import { Parallax } from 'react-scroll-parallax'
import ManDrawingLenin from '@/assets/img/PreInvasionB_ManDrawingLenin.png'
import SihanoukSpeech from '@/assets/img/PreInvasionB_PrinceSihanoukSpeech.jpg'
import Bombing from '@/assets/img/PreInvasionB_Bombing.jpg'
import Modal from '../../Modal/Modal'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const PreInvasionB = (props: Props) => {
  const CHAPTER_ID: Chapter = 'PRE_INVASION_B'

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

  return (
    <div id={CHAPTER_ID}>
      <div ref={topRef} className={'header-outer'}>
        <div className='header-inner'>
          <h2 className={classNames(classes.heading, 'chapter-heading')}>
            {CHAPTERS.get(CHAPTER_ID)?.title}
          </h2>
        </div>
      </div>
      <div className='chapter-body-wrapper'>
        <div className={classNames(classes.section, classes.rightAlign)}>
          <div className={classes.sectionColumn}>
            <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T1_Kontakt}</p>
            <p style={{ alignSelf: 'center', textAlign: 'justify' }}>
              {language.T2_Ansprache}
              <Modal direction='RIGHT'>
                <p>TODO Rede</p>
                <p>
                  Kurzer Kontext dazu, warum Sihanouk im Exil ist und ggf. worum es in der Rede
                  ging...
                </p>
              </Modal>
            </p>
          </div>
          <Parallax speed={10}>
            <img
              src={SihanoukSpeech}
              alt='Testbild'
              className={classes.img}
              title='Prinz Sihanouk hält eine Rede, Quelle: https://lepetitjournal.com/sites/default/files/prince-norodom-sihanouk-giving-a-speech-at-the-opening-of-a-botteling-plant_i-G-37-3790-LIEIF00Z.jpg'
            />
          </Parallax>
        </div>
        <div className={classNames(classes.section, classes.rightAlign)}>
          <Parallax speed={10}>
            <img
              src={ManDrawingLenin}
              alt='Testbild'
              className={classes.img}
              title='KI-generiertes Bild (labs.openai.com)'
            />
          </Parallax>
          <div className={classes.sectionColumn}>
            <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T3_Maler}</p>
            <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T4_Biographie}</p>
          </div>
        </div>
        <div className={classes.section}>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T5_Druckerei}</p>
          <Parallax speed={10}>
            <img
              src={Bombing}
              alt='Testbild'
              className={classes.img}
              title='Bombenangriff nahe Phnom Penh (1973) Quelle: https://revcom.us/en/a/526/american-crime-47-the-bombing-of-cambodia-1969-1973-en.html'
            />
          </Parallax>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default PreInvasionB
