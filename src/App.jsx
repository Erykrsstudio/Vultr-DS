import { useState, useEffect } from 'react'
import './App.css'
import { Button } from './components/Button.jsx'
import { BtnLinkIcon } from './components/BtnLinkIcon.jsx'
import { Feature } from './components/Feature.jsx'
import { Switcher } from './components/Switcher.jsx'
import { Card } from './components/Card.jsx'
import { Input } from './components/Input.jsx'
import { Checkbox } from './components/Checkbox.jsx'
import sectionIllustration from './assets/img/section-main-illustration.png'

function App() {
  const [mainContext, setMainContext] = useState('on-primary')
  const [genContext, setGenContext] = useState('default')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-dark-mode', 'true')
    } else {
      document.documentElement.removeAttribute('data-dark-mode')
    }
  }, [darkMode])

  return (
    <>
      <main className="site">
        <div className="section section--main" data-context={mainContext}>
              <Switcher 
                variant="mode"
                className="section__switcher"
                checked={darkMode} 
                onChange={() => setDarkMode(!darkMode)}
              />
              <Switcher 
                className="section__switcher"
                checked={mainContext === 'on-primary'} 
                onChange={() => setMainContext(prev => prev === 'on-primary' ? 'default' : 'on-primary')}
              />
            <div className="section__container">
                <div className="section__row section__row--top">
                    <div className="section__header">
                        <h1 className="section__title">
                            The AI-first Global Cloud Platform
                        </h1>
                        <p className="section__description p-3xl text--strong-color">
                            Global, automated cloud infrastructure from the broadest array of AMD and NVIDIA GPUs
                            to virtual CPUs, bare metal, Kubernetes, storage, and networking solutions.
                        </p>
                    </div>
                    <Card className='card--login' initialContext="default" switcher={true}>
                        <h4 className="">Deploy in seconds</h4>
                        <div className='card__form'>
                            <Input className='input--xl' placeholder="Email address" />
                            <Input className='input--xl' placeholder="Password" type="password" />
                            <Checkbox/>
                            <Button variant="primary" size="xl">
                                <span>Create free account</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.46967 5.46967C8.17678 5.76256 8.17678 6.23744 8.46967 6.53033L13.9393 12L8.46967 17.4697C8.17678 17.7626 8.17678 18.2374 8.46967 18.5303C8.76256 18.8232 9.23744 18.8232 9.53033 18.5303L15.5303 12.5303C15.8232 12.2374 15.8232 11.7626 15.5303 11.4697L9.53033 5.46967C9.23744 5.17678 8.76256 5.17678 8.46967 5.46967Z" fill="var(--sys-button-primary-solid-fg)"/>
                                </svg>
                            </Button>
                        </div>
                    </Card>
                </div>
                <div className="section__row section__row-bottom">
                    <Card initialContext="primary" 
                        className='card--link'
                        caption={'Announcement'} 
                        title={'Introducing New Vultr VX1™ Compute Plans'}
                        desc={'IT leaders are under increasing pressure. Cloud costs continue to rise, while budgets stagnate or shrink. New AI initiatives are under the microscope, requiring new resources and focus, while geographic derisking plans.'}
                        action={true}>
                    </Card>
                    <div className="section__cards-grid">
                        <Card className="card--sm card--link" initialContext="default"
                            caption={'Cloud GPU'} 
                            title={'High-Performance Cloud GPU Solutions'}
                            action={true}
                            switcher={true}
                        >
                        </Card>
                        <Card className="card--sm card--link" initialContext="default"
                            caption={'Cloud GPU'} 
                            title={'High-Performance Cloud GPU Solutions'}
                            action={true}
                            switcher={true}
                        >
                        </Card>
                        <Card className="card--sm card--link" initialContext="default"
                            caption={'Cloud GPU'} 
                            title={'High-Performance Cloud GPU Solutions'}
                            action={true}
                            switcher={true}
                        >
                        </Card>
                        <Card className="card--sm card--link" initialContext="default"
                            caption={'Cloud GPU'} 
                            title={'High-Performance Cloud GPU Solutions'}
                            action={true}
                            switcher={true}
                        >
                        </Card>
                    </div>
                </div>
            </div>
            <div className="section__illustration">
                <img src={sectionIllustration} alt="Section illustration" />
            </div>
        </div>
        <div className="section section--generation"  data-context={genContext}>
            <Switcher 
              className="section__switcher"
              checked={genContext === 'on-primary'} 
              onChange={() => setGenContext(prev => prev === 'on-primary' ? 'default' : 'on-primary')}
            />
            <div className="section__container">
                <h2 className="section__title">Next-generation AI infrastructure</h2>
                <div className="section__content">
                    <div className='section__features'>
                        <Feature 
                            initialContext="default"
                            title="Cloud Compute"
                            description="Deploy and scale containerized apps with a fully managed service. Vultr Kubernetes Engine ushers in a better way to optimize container orchestration."
                        />
                        <Feature 
                            initialContext="default"
                            title="Cloud Compute"
                            description="Deploy and scale containerized apps with a fully managed service. Vultr Kubernetes Engine ushers in a better way to optimize container orchestration."
                        />
                        <Feature 
                            initialContext="default"
                            title="Cloud Compute"
                            description="Deploy and scale containerized apps with a fully managed service. Vultr Kubernetes Engine ushers in a better way to optimize container orchestration."
                        />
                        <Feature 
                            initialContext="default"
                            title="Cloud Compute"
                            description="Deploy and scale containerized apps with a fully managed service. Vultr Kubernetes Engine ushers in a better way to optimize container orchestration."
                        />
                        <Feature 
                            initialContext="default"
                            title="Cloud Compute"
                            description="Deploy and scale containerized apps with a fully managed service. Vultr Kubernetes Engine ushers in a better way to optimize container orchestration."
                        />
                        <Feature 
                            initialContext="default"
                            title="Cloud Compute"
                            description="Deploy and scale containerized apps with a fully managed service. Vultr Kubernetes Engine ushers in a better way to optimize container orchestration."
                        />
                    </div>
                    <Feature 
                        variant="banner"
                        initialContext="default"
                        subtitle="Vultr Agent"
                        title="Meet Your Cloud Intelligence"
                        description="Streamline your Vultr experience with AI Powered Assistance and intuitive cloud resource composition. Vultr Agent lets you chat with our docs to explore products and use Agent Compose to build infrastructure and get instant pricing."
                    />
                </div>
            </div>
        </div>
      </main>
    </>
  )
}

export default App
