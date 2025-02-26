export function trackFacebookEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params)
  }
}

// Ejemplos de eventos comunes
export function trackLead(value?: number, currency?: string) {
  trackFacebookEvent('Lead', { value, currency })
}

export function trackContact() {
  trackFacebookEvent('Contact')
}

export function trackCompleteRegistration(value?: number, currency?: string) {
  trackFacebookEvent('CompleteRegistration', { value, currency })
}

export function trackScheduleMeeting() {
  trackFacebookEvent('ScheduleMeeting')
}

// Eventos adicionales para seguimiento completo
export function trackViewContent(contentName: string, contentCategory?: string, value?: number) {
  trackFacebookEvent('ViewContent', { 
    content_name: contentName,
    content_category: contentCategory,
    value: value
  })
}

export function trackSearch(searchString: string, contentCategory?: string) {
  trackFacebookEvent('Search', { 
    search_string: searchString,
    content_category: contentCategory
  })
}

export function trackAddToWishlist(contentName?: string, contentCategory?: string, value?: number) {
  trackFacebookEvent('AddToWishlist', { 
    content_name: contentName,
    content_category: contentCategory,
    value: value
  })
}

export function trackInitiateCheckout(value?: number, currency?: string) {
  trackFacebookEvent('InitiateCheckout', { 
    value: value,
    currency: currency
  })
}

export function trackSubscribe(value?: number, currency?: string, predictedLtv?: number) {
  trackFacebookEvent('Subscribe', { 
    value: value,
    currency: currency,
    predicted_ltv: predictedLtv
  })
}

export function trackStartTrial(value?: number, currency?: string, predictedLtv?: number) {
  trackFacebookEvent('StartTrial', { 
    value: value,
    currency: currency,
    predicted_ltv: predictedLtv
  })
}

export function trackCustomEvent(eventName: string, params?: Record<string, any>) {
  trackFacebookEvent(eventName, params)
} 