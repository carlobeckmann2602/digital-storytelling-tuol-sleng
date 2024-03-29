import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './AfterInvasionB.module.scss'
import * as language from './AfterInvasionB_lang'
import { Parallax } from 'react-scroll-parallax'
import FieldImage1 from '@/assets/img/AfterInvasionB_Field1_c_the_Tuol_Sleng_Museum_of_Genocide.jpg'
import FieldImage2 from '@/assets/img/AfterInvasionB_Field2_c_the_Tuol_Sleng_Museum_of_Genocide.jpg'
import FieldImage3 from '@/assets/img/AfterInvasionB_Field3_c_the_Tuol_Sleng_Museum_of_Genocide.jpg'
import UniformImage from '@/assets/img/AfterInvasionB_Uniform_c_Pictures_from_History_Kontributor.jpg'
import Quotation from '../../Quotation/Quotation'
import Modal from '../../Modal/Modal'
import useSound from 'use-sound'
import FieldworkSound from '@/assets/sounds/background_ambient_fieldwork.mp3'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
  soundEnabled: boolean
  fadingTime: number
}

const AfterInvasionB = (props: Props) => {
  const CHAPTER_ID: Chapter = 'AFTER_INVASION_B'

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
  const [play, { sound, stop }] = useSound(FieldworkSound, {
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
        <div className={classNames(classes.section)}>
          <div className={classNames(classes.sectionColumn)}>
            <p>{language.T1_Ankunft}</p>
            <p>
              {language.T2_Kinder}
              <Modal direction='RIGHT'>
                <p>Die Organisation Angka</p>
                <p>{language.I1_Angka}</p>
              </Modal>
            </p>
          </div>
          <div className={classNames('imgContainerWithTape', 'tape2')}>
            <img
              className={classNames(classes.img, classes.rotateRight)}
              src={UniformImage}
              alt='Testbild'
              title='Mam Nay, ranghöchster Vernehmungsbeamter der Roten Khmer, führt eine Gruppe von Kaderleuten der Roten Khmer an, Quelle: https://www.gettyimages.de/detail/nachrichtenfoto/mam-nay-a-tall-thin-pock-faced-former-science-teacher-nachrichtenfoto/1354465680?adppopup=true'
            />
          </div>
        </div>
        <div className={classNames(classes.section)}>
          <div className={classNames(classes.sectionColumn)}>
            <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T4_Plantage}</p>
          </div>
        </div>
        <div className={classNames(classes.section)}>
          <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T5_Straflager}</p>
          <Parallax speed={15}>
            <img
              className={classNames(classes.img, classes.imgM, classes.rotateRight)}
              src={FieldImage2}
              alt='Testbild'
              title='Rote-Khmer-Bauern auf einem Propagandafoto, außerhalb von Phnom Penh, Quelle: http://www.tuolsleng.com/detail.php?photographsPage=7&photosPage=73'
            />
          </Parallax>
          <Parallax speed={25}>
            <img
              className={classNames(classes.img, classes.imgM, classes.rotateLeft)}
              src={FieldImage1}
              alt='Testbild'
              title='Ein Propagandafoto zeigt Reisbauern bei der Arbeit in einem Gemeinschaftsbetrieb außerhalb von Phnom Penh, Quelle: http://www.tuolsleng.com/detail.php?photographsPage=9&photosPage=111'
            />
          </Parallax>
        </div>
        <Quotation quote={language.Q1_Plantage} citation={'Bou Meng'} colorCode={'bou'}></Quotation>
        <div className={classNames(classes.section)}>
          <Parallax speed={15}>
            <img
              className={classNames(classes.img, classes.rotateLeft)}
              src={FieldImage3}
              alt='Testbild'
              title='Bauern auf einem Propagandafoto, in einem Reisfeld außerhalb von Phnom Penh, Quelle: http://www.tuolsleng.com/detail.php?photographsPage=7&photosPage=80'
            />
          </Parallax>
          <div className={classNames(classes.sectionColumn)}>
            <p style={{ alignSelf: 'center', textAlign: 'justify' }}>{language.T6_Verschwinden}</p>
            <p>{language.T7_Angst}</p>
          </div>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default AfterInvasionB
