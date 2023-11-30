import { GrSearch } from 'react-icons/gr';

const Searchbar = ({ search, setSearch }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='w-full mb-4 mt-4 md:mt-0 lg:mb-0'>
            <form onSubmit={handleSubmit} className='flex items-center justify-start relative lg:float-right'>
                <input
                    className='py-3 px-3 border rounded-full text-gray-800 placeholder:text-gray-400 shadow-sm focus:outline-none bg-gray-200 w-full lg:w-96'
                    placeholder='Search for post or comment'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type='submit' className='text-2xl text-gray-950 absolute left-[90%]'><GrSearch /></button>
            </form>
        </div>
    )
}

export default Searchbar
