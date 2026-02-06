import { useState } from 'react'
import './Feature.scss'
import { FeatureIcon } from './FeatureLinkIcon.jsx'
import { BtnLinkIcon } from './BtnLinkIcon.jsx'
import { Switcher } from './Switcher.jsx'
import bannerIllustration from '../assets/img/banner-illustration.png'

export function Feature({ 
  variant = 'default', 
  title, 
  subtitle,
  description, 
  initialContext = 'default',
  className = ''
}) {
  const [context, setContext] = useState(initialContext)

  const toggleContext = () => {
    setContext(prev => (prev === 'on-primary' ? 'default' : 'on-primary'))
  }

  const isBanner = variant === 'banner'

  return (
    <div 
      className={`feature ${isBanner ? 'feature--banner' : ''} ${className} `.trim()} 
      data-context={context}
    >
      <Switcher 
        className="feature__switcher"
        size="sm" 
        checked={context === 'on-primary'} 
        onChange={toggleContext} 
      />
      
      <div className="feature__content">
        {isBanner && subtitle && (
          <p className="feature__subtitle p-2xl">{subtitle}</p>
        )}
        
        {isBanner ? (
          <h2 className="feature__title">{title}</h2>
        ) : (
          <h4 className="feature__title">
            {title} <FeatureIcon />
          </h4>
        )}
        
        <p className="feature__description p-2xl">
          {description}
        </p>

        {isBanner && (
          <a href="#" className="feature__link link link--more">
            <span>Learn More</span>
            <BtnLinkIcon />
          </a>
        )}
      </div>

      {isBanner && (
        <div className="feature__illustration">
          <img src={bannerIllustration} alt="Feature illustration" />
        </div>
      )}
    </div>
  )
}
