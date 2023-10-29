import Image from 'next/image'
import StudentInfo from './studentInfo'; // Correct relative path
import Link from 'next/link';

export default function Home() {
  return (
   
    <main>
      
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      
      <StudentInfo />
      
      <ul>
        <li><Link href="week2">Go to Week 2</Link></li>
        <li><Link href="week3">Go to Week 3</Link></li>
        <li><Link href="week4">Go to Week 4</Link></li>

      </ul>

  
  
      
    </main>
  )
}