import { NextResponse } from 'next/server';

export interface EnquiryPayload {
  fullName: string;
  email: string;
  phone?: string;
  currentStatus: string;
  interestType: 'training_program' | 'career_guidance' | 'general_enquiry';
  programOrTrack?: string;
  preferredMode?: 'online_live' | 'in_person' | 'flexible';
  message?: string;
  consent: boolean;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      currentStatus,
      interestType,
      programOrTrack,
      preferredMode,
      message,
      consent,
    } = body as EnquiryPayload;

    // Field-level validation
    const errors: Record<string, string> = {};

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    if (phone && phone.trim().length > 0) {
      const cleanPhone = phone.replace(/[\s\-\(\)\+]/g, '');
      if (!/^\d{7,15}$/.test(cleanPhone)) {
        errors.phone = 'Please provide a valid telephone or mobile number (7-15 digits).';
      }
    }

    if (!currentStatus || typeof currentStatus !== 'string') {
      errors.currentStatus = 'Please select your current educational or professional status.';
    }

    if (!interestType || !['training_program', 'career_guidance', 'general_enquiry'].includes(interestType)) {
      errors.interestType = 'Please select a valid area of interest.';
    }

    if (!consent) {
      errors.consent = 'You must acknowledge our privacy notice to proceed.';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed. Please correct the highlighted fields.',
          errors,
        },
        { status: 400 }
      );
    }

    // Sanitize input
    const sanitizedData = {
      fullName: fullName.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 120),
      phone: phone ? phone.trim().slice(0, 25) : undefined,
      currentStatus: currentStatus.slice(0, 60),
      interestType,
      programOrTrack: programOrTrack ? programOrTrack.slice(0, 100) : 'General',
      preferredMode: preferredMode || 'online_live',
      message: message ? message.trim().slice(0, 1000) : '',
      submittedAt: new Date().toISOString(),
      referenceId: `YA-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`,
    };

    // Log internally (simulating CRM dispatch)
    console.log('[Enquiry Received]', sanitizedData);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your career guidance enquiry has been securely received.',
        referenceId: sanitizedData.referenceId,
        details: {
          name: sanitizedData.fullName,
          programOrTrack: sanitizedData.programOrTrack,
          responseTimeframe: 'Our guidance coordinator will reach out within 24 business hours.',
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Enquiry API Error]', error);
    return NextResponse.json(
      {
        success: false,
        message: 'A technical error occurred while processing your enquiry. Please try again or email us directly at contact@karka.academy.',
      },
      { status: 500 }
    );
  }
}
