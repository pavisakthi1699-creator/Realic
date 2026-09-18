import { NextResponse } from 'next/server';
import { getAllProperties, createProperty } from '@/data/store';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city');
    const type = searchParams.get('type');
    const query = searchParams.get('q');

    let properties = getAllProperties();

    if (city && city !== 'All') {
      properties = properties.filter((p) => p.city.toLowerCase() === city.toLowerCase());
    }

    if (type && type !== 'All') {
      properties = properties.filter((p) => p.propertyType.toLowerCase().includes(type.toLowerCase()));
    }

    if (query) {
      const q = query.toLowerCase();
      properties = properties.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.locality.toLowerCase().includes(q)
      );
    }

    return NextResponse.json(
      { success: true, count: properties.length, data: properties },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=120',
        },
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch properties' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.title || !body.price || !body.city || !body.address) {
      return NextResponse.json(
        { success: false, error: 'Missing required property fields (title, price, city, address)' },
        { status: 400 }
      );
    }

    const created = createProperty(body);
    return NextResponse.json({ success: true, data: created }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create property' },
      { status: 500 }
    );
  }
}
