import { useState } from 'react'
import { Switcher } from './Switcher'
import { BtnLinkIcon } from './BtnLinkIcon.jsx'
import './Card.scss'


export function Card({ 
    children,
  className = '', 
  initialContext = 'default',
  caption,
  title,
  desc,
  action,
  switcher
}) {
  const [context, setContext] = useState(initialContext)

  const toggleContext = () => {
    setContext(prev => (prev === 'on-primary' ? 'default' : 'on-primary'))
  }

  return (
    <div className={`card ${className}`} data-context={context}>
      {switcher && <Switcher size='sm' 
        className='card__switcher'
        checked={context === 'on-primary'} 
        onChange={toggleContext} 
      />}
      {caption && <h6 className="card__caption">{caption}</h6>}
      {title && <h4 className="card__title">{title}</h4>}
      {desc && <p className="card__desc">{desc}</p>}
      { action && <a href="#" className="card__action btn btn--lg btn--ghost">
            <span>Learn More</span>
            <BtnLinkIcon />
        </a>}
    {children}
    </div>
  )
}
