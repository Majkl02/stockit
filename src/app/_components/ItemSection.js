'use client'

import { useState } from 'react'
import ItemPagination from './ItemPagination'
import ItemsGrid from './ItemsGrid'

const ITEMS_PER_PAGE = 5 // Kolko itemov chcem zobrazit na stranke

export default function ItemSection({ items, itemsMetadata }) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  return (
    <>
      <ItemsGrid currentItems={currentItems} />

      <ItemPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  )
}
