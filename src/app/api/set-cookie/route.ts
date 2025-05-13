import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Generate a timestamp to make the value unique for testing
    const timestamp = new Date().toISOString();
    const cookieValue = `secure-value-${timestamp}`;
    
    console.log('Setting HTTP-only secure cookie from Next.js:', cookieValue);
    
    // Create a response
    const response = NextResponse.json({ 
      message: 'Cookie set successfully',
      timestamp: timestamp 
    });
    
    // Set the HTTP-only secure cookie directly from Next.js
    response.cookies.set({
      name: 'secretToken',
      value: cookieValue,
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 60 * 60 * 24, // 1 day in seconds
      path: '/',
    });
    
    return response;
  } catch (error) {
    console.error('Error setting cookie:', error);
    return NextResponse.json({ error: 'Failed to set cookie' }, { status: 500 });
  }
} 