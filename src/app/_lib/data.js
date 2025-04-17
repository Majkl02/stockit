import { cookies } from 'next/headers'

/* GET ALL ITEMS */
export async function getItems() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('access_token')?.value
    console.log('Token:', token)
    const res = await fetch('http://localhost:8888/api/v1/items', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    if (!res.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await res.json()
    // console.log('Fetched items:', data)
    return data
  } catch (err) {
    console.error('Fetch error:', err)
  }
}

/* GET SINGLE ITEM BY ID*/
export async function getItemById(id) {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('access_token')?.value
    const res = await fetch(`http://localhost:8888/api/v1/items/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    if (!res.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await res.json()
    // console.log('Fetched item:', data)
    return data
  } catch (err) {
    console.error('Fetch error:', err)
  }
}

/* GET ALL ORGANIZATIONS*/
export async function getOrganizations() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('access_token')?.value
    const res = await fetch('http://localhost:8888/api/v1/organizations', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    if (!res.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await res.json()
    // console.log('Fetched organizations:', data)
    return data
  } catch (err) {
    console.error('Fetch error:', err)
  }
}

/* GET SINGLE ORGANIZATION BY ID*/
export async function getOrganizationById(id) {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('access_token')?.value
    const res = await fetch(
      `http://localhost:8888/api/v1/organizations/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    )

    if (!res.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await res.json()
    // console.log('Fetched organization:', data)
    return data
  } catch (err) {
    console.error('Fetch error:', err)
  }
}

/* GET ALL LOCATIONS*/
export async function getLocations() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('access_token')?.value
    const res = await fetch('http://localhost:8888/api/v1/locations', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    if (!res.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await res.json()
    // console.log('Fetched locations:', data)
    return data
  } catch (err) {
    console.error('Fetch error:', err)
  }
}

/* GET SINGLE LOCATION BY ID*/
export async function getLocationById(id) {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('access_token')?.value
    const res = await fetch(`http://localhost:8888/api/v1/locations/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    if (!res.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await res.json()
    // console.log('Fetched location:', data)
    return data
  } catch (err) {
    console.error('Fetch error:', err)
  }
}

/* GET ALL CATEGORIES*/
export async function getCategories() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('access_token')?.value
    const res = await fetch('http://localhost:8888/api/v1/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    if (!res.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await res.json()
    // console.log('Fetched categories:', data)
    return data
  } catch (err) {
    console.error('Fetch error:', err)
  }
}
