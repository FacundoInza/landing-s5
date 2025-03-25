import { NextResponse } from 'next/server'

// URL del webhook de n8n
const webhookUrl = process.env.N8N_WEBHOOK_URL || 'https://n8n.silver5ai.com/webhook/75369307-a998-410a-acec-4196f0b707cd'

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    
    // Añadir metadatos específicos del formulario de WhatsApp
    const enrichedData = {
      ...formData,
      formSource: 'whatsapp-agent-landing',
      submittedAt: new Date().toISOString()
    }
    
    // Enviar datos al webhook de n8n
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enrichedData),
    })
    
    if (!response.ok) {
      throw new Error('Error al enviar datos al webhook')
    }
    
    return NextResponse.json({ 
      success: true,
      message: 'Datos recibidos correctamente'
    })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al procesar la solicitud del agente WhatsApp'
      },
      { status: 500 }
    )
  }
} 