import React, { useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './ChildhoodC.module.scss'
import * as language from './ChildhoodC_lang'
import PlaceholderImage from '@/assets/img/Placeholder.png'
import Modal from '../../Modal/Modal'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
}

const ChildhoodC = (props: Props) => {
  const CHAPTER_ID: Chapter = 'CHILDHOOD_C'

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
      <div className={classes.section}>
        <Parallax speed={5}>
          <img src={PlaceholderImage} style={{ width: '400px' }} alt='Testbild' />
        </Parallax>
        <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T1_Geburt}</p>
      </div>
      <div className={classes.section}>
        <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T2_Kindheit}</p>
        <Parallax speed={5}>
          <img src={PlaceholderImage} style={{ width: '400px' }} alt='Testbild' />
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={5}>
          <img src={PlaceholderImage} style={{ width: '400px' }} alt='Testbild' />
        </Parallax>
        <div className={classNames(classes.sectionColumn)}>
          <p> {language.T3_Hauptstadt}</p>
          <p> {language.T4_Mechaniker}</p>
        </div>
      </div>
      <div className={classes.section}>
        <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T5_Heirat}</p>
        <Parallax speed={5}>
          <img src={PlaceholderImage} style={{ width: '400px' }} alt='Testbild' />
        </Parallax>
      </div>
      <div className={classes.section}>
        <Parallax speed={5}>
          <img src={PlaceholderImage} style={{ width: '400px' }} alt='Testbild' />
        </Parallax>
        <p style={{ alignSelf: 'center', textAlign: 'justify' }}>
          {language.T6_Unruhen}
          <Modal>
            <p>TODO Armut</p>
            <p>
              Kurz erklären, woher die Unzufriedenheit im Land kommt und warum es Unruhen gibt
              (ausführlich wird's dann in der Einordnung)...
            </p>
          </Modal>
        </p>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default ChildhoodC
