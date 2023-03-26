import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Chapter, CHAPTERS } from '../../../helpers/constants'
import useOnScreen from '../../../helpers/useOnScreenHook'
import classes from './ChildhoodB.module.scss'

interface Props {
  setCurrentChapter: (chapter: Chapter) => void
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, recusandae natus
          itaque fugit quod optio earum excepturi quae est quibusdam eius deleniti hic, ea
          consectetur distinctio nobis tempora voluptatum voluptates?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, recusandae natus
          itaque fugit quod optio earum excepturi quae est quibusdam eius deleniti hic, ea
          consectetur distinctio nobis tempora voluptatum voluptates?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, recusandae natus
          itaque fugit quod optio earum excepturi quae est quibusdam eius deleniti hic, ea
          consectetur distinctio nobis tempora voluptatum voluptates?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, recusandae natus
          itaque fugit quod optio earum excepturi quae est quibusdam eius deleniti hic, ea
          consectetur distinctio nobis tempora voluptatum voluptates?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, recusandae natus
          itaque fugit quod optio earum excepturi quae est quibusdam eius deleniti hic, ea
          consectetur distinctio nobis tempora voluptatum voluptates?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, recusandae natus
          itaque fugit quod optio earum excepturi quae est quibusdam eius deleniti hic, ea
          consectetur distinctio nobis tempora voluptatum voluptates?
        </p>
      </div>
      <div ref={bottomRef}></div>
    </div>
  )
}

export default ChildhoodB
