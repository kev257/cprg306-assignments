import React from 'react';
import Link from 'next/link';


function StudentInfo() {
  return (
    <div>
      <h2>Student Information</h2>
      <p>Name: Kevin  Nguyen</p>
      <p>Section: CPRG 306 F</p>
      
      <h1 className={styles.title}>
  Read <Link href="https://github.com/kev257?tab=repositories">this page!</Link>
</h1>

      
    </div>
  );
}

export default StudentInfo;

