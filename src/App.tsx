import { ParallaxProvider } from 'react-scroll-parallax'
import { useState } from 'react'
import ChildhoodC from './components/chapter/ChildhoodC/ChildhoodC'
import ChildhoodB from './components/chapter/ChildhoodB/ChildhoodB'
import Template from './components/chapter/Template/Template'
import { Chapter, FADINGTIME } from './helpers/constants'
import './App.scss'
import HistoricalBackground from './components/chapter/HistoricalBackground/HistoricalBackground'
import PreInvasionB from './components/chapter/PreInvasionB/PreInvasionB'
import PreInvasionC from './components/chapter/PreInvasionC/PreInvasionC'
import InvasionBackground from './components/chapter/InvasionBackground/InvasionBackground'
import AfterInvasionB from './components/chapter/AfterInvasionB/AfterInvasionB'
import AfterInvasionC from './components/chapter/AfterInvasionC/AfterInvasionC'
import ArrestB from './components/chapter/ArrestB/ArrestB'
import ArrestC from './components/chapter/ArrestC/ArrestC'
import DictatorshipBackground from './components/chapter/DictatorshipBackground/DictatorshipBackground'
import PrisonLifeBackground from './components/chapter/PrisonLifeBackground/PrisonLifeBackground'
import PrisonB from './components/chapter/PrisonB/PrisonB'
import PrisonC from './components/chapter/PrisonC/PrisonC'
import LiberationFromPrisonBackground from './components/chapter/LiberationFromPrisonBackground/LiberationFromPrisonBackground'
import EscapeFromPrisonBoth from './components/chapter/EscapeFromPrisonBoth/EscapeFromPrisonBoth'
import OutlookBackground from './components/chapter/OutlookBackground/OutlookBackground'
import InvasionBoth from './components/chapter/InvasionBoth/InvasionBoth'
import Sidebar from './components/Sidebar/Sidebar'
import CurrentPersonMarker from './components/CurrentPersonMarker/CurrentPersonMarker'
import MuteButton from './components/MuteButton/MuteButton'
import PrisonModelCanvas from './components/landingpage/PrisonModelCanvas'
import Disclaimer from './components/Disclaimer/Disclaimer'
import GeneralInfo from './components/GeneralInfo/GeneralInfo'
import * as language from './App_lang'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'

function App() {
  const [currentChapter, setCurrentChapter] = useState<Chapter>('TITLE')

  const [soundEnabled, setSoundEnabled] = useState(false)

  return (
    <ParallaxProvider>
      <div className='app'>
        <Disclaimer>
          <h1>Disclaimer</h1>
          <p>{language.DISCLAIMER_TEXT}</p>
        </Disclaimer>
        <PrisonModelCanvas setCurrentChapter={setCurrentChapter} />
        <div className='sidebarWrapper'>
          <Sidebar currentChapter={currentChapter} />
          <div className='mute-btn-wrapper'>
            <MuteButton soundEnabledGlobal={soundEnabled} setSoundEnabledGlobal={setSoundEnabled} />
          </div>
        </div>
        <div className='chapter-content'>
          <CurrentPersonMarker currentChapter={currentChapter} />
          <Template
            soundEnabled={soundEnabled}
            fadingTime={FADINGTIME}
            setCurrentChapter={setCurrentChapter}
          />
          <HistoricalBackground
            soundEnabled={soundEnabled}
            fadingTime={FADINGTIME}
            setCurrentChapter={setCurrentChapter}
          />
          <ChildhoodC
            soundEnabled={soundEnabled}
            fadingTime={FADINGTIME}
            setCurrentChapter={setCurrentChapter}
          />
          <ChildhoodB
            soundEnabled={soundEnabled}
            fadingTime={FADINGTIME}
            setCurrentChapter={setCurrentChapter}
          />
          <PreInvasionB
            soundEnabled={soundEnabled}
            fadingTime={FADINGTIME}
            setCurrentChapter={setCurrentChapter}
          />
          <PreInvasionC
            soundEnabled={soundEnabled}
            fadingTime={FADINGTIME}
            setCurrentChapter={setCurrentChapter}
          />
          <InvasionBackground
            soundEnabled={soundEnabled}
            fadingTime={FADINGTIME}
            setCurrentChapter={setCurrentChapter}
          />
          <InvasionBoth
            soundEnabled={soundEnabled}
            fadingTime={FADINGTIME}
            setCurrentChapter={setCurrentChapter}
          />
          <AfterInvasionB
            soundEnabled={soundEnabled}
            fadingTime={FADINGTIME}
            setCurrentChapter={setCurrentChapter}
          />
          <AfterInvasionC
            soundEnabled={soundEnabled}
            fadingTime={FADINGTIME}
            setCurrentChapter={setCurrentChapter}
          />
          <ArrestB
            soundEnabled={soundEnabled}
            fadingTime={FADINGTIME}
            setCurrentChapter={setCurrentChapter}
          />
          <ArrestC
            setCurrentChapter={setCurrentChapter}
            soundEnabled={soundEnabled}
            fadingTime={FADINGTIME}
          />
          <DictatorshipBackground
            soundEnabled={soundEnabled}
            fadingTime={FADINGTIME}
            setCurrentChapter={setCurrentChapter}
          />
          <PrisonLifeBackground
            soundEnabled={soundEnabled}
            fadingTime={FADINGTIME}
            setCurrentChapter={setCurrentChapter}
          />
          <PrisonB
            soundEnabled={soundEnabled}
            fadingTime={FADINGTIME}
            setCurrentChapter={setCurrentChapter}
          />
          <PrisonC
            soundEnabled={soundEnabled}
            fadingTime={FADINGTIME}
            setCurrentChapter={setCurrentChapter}
          />
          <LiberationFromPrisonBackground
            soundEnabled={soundEnabled}
            fadingTime={FADINGTIME}
            setCurrentChapter={setCurrentChapter}
          />
          <EscapeFromPrisonBoth
            soundEnabled={soundEnabled}
            fadingTime={FADINGTIME}
            setCurrentChapter={setCurrentChapter}
          />
          <OutlookBackground
            soundEnabled={soundEnabled}
            fadingTime={FADINGTIME}
            setCurrentChapter={setCurrentChapter}
          />
        </div>
        <GeneralInfo setCurrentChapter={setCurrentChapter} />
        <ScrollToTopButton />
      </div>
    </ParallaxProvider>
  )
}

export default App
