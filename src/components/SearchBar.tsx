type SearchBarProps = {
  searchTerm: string
  setSearchTerm: (term: string) => void
}

function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <div>
      <input type="text" placeholder="Search by VIN or Model" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
  )
}

export default SearchBar
