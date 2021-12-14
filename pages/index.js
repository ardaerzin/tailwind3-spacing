import styles from '../styles/Test.module.css'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <h1 className="text-3xl font-bold underline">
        Tailwind3
      </h1>

      <div className='flex gap-[10px]'>
        <div className={styles.test}>
          sq1
        </div>
        <div className={styles['broken-test']}>
          sq2
        </div>
        <div className="w-1.5 h-1.5 bg-[green]">
          sq3
        </div>
      </div>
    </div>
  )
}

export default Home;
