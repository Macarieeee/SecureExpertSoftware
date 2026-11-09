import { useEffect } from 'react'

const SUFFIX = ' | Secure eXpert Software'

export default function useMeta(title, description) {
  useEffect(() => {
    document.title = title ? title + SUFFIX : 'Secure eXpert Software (SXS) | Software pentru spitale'
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
