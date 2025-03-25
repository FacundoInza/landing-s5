export function trackFacebookEvent(eventName: string, params?: Record<string, unknown>) {
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

export function trackCustomEvent(eventName: string, params?: Record<string, unknown>) {
  trackFacebookEvent(eventName, params)
}

export const trackLeadSubmission = (formData: {
  name: string;
  phone: string;
  countryCode: string;
  isVerifiedTrader: boolean;
  exchanges: string[];
  primaryCurrency: string;
  tradingFrequency: string;
  email?: string;
  country?: string;
  language?: string;
}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    // Enviar evento de conversión a Meta Pixel
    window.fbq('track', 'Lead', {
      content_name: 'Lead Form Submission',
      content_category: 'Form',
      value: 1.00,
      currency: 'USD',
    })
    
    // También podemos enviar un evento personalizado con más detalles
    window.fbq('trackCustom', 'LeadFormSubmission', {
      name: formData.name,
      isVerifiedTrader: formData.isVerifiedTrader,
      exchanges: formData.exchanges.join(','),
      primaryCurrency: formData.primaryCurrency,
    })
  }
}

export const trackWhatsAppAgentSubmission = (formData: {
  fullName: string;
  whatsappNumber: string;
  email: string;
  webProfile: string;
  businessDescription: string;
  messageVolume?: string;
  frequentQuestions?: string;
  mainChallenge?: string;
  expectedImpact?: string;
  country?: string;
  language?: string;
}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    // Enviar evento de conversión estándar a Meta Pixel
    window.fbq('track', 'Lead', {
      content_name: 'WhatsApp Agent Lead Form',
      content_category: 'WhatsApp Agent',
      value: 1.00,
      currency: 'USD',
    })
    
    // Enviar evento personalizado con detalles específicos
    window.fbq('trackCustom', 'WhatsAppAgentSubmission', {
      name: formData.fullName,
      business_type: formData.businessDescription.substring(0, 50),
      message_volume: formData.messageVolume || 'No especificado',
      country: formData.country || 'No especificado',
    })
  }
} 