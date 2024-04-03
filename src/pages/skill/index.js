import PageHeading from '@/components/common/PageHeading'
import Container from '@/components/layout/Container'
import SkillTable from '@/components/views/skill/Table'
import WithProtected from '@/hoc/withProtected'
import { deleteDocument } from '@/services/firebase/crud/deleteDocument'
import getCollecction from '@/services/firebase/crud/getCollecction'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const index = (result) => {

  return (
    <Container>
      <PageHeading title="Skill">
          <Link className='btn !px-2 !py-0' href="/skill/create"><i className='text-xl bx bx-list-plus'></i> Create</Link>
      </PageHeading>
      <SkillTable items={result}/>
    </Container>
  )
}

export default WithProtected(index);
export const getServerSideProps = async () => {

  const { result } = await getCollecction("skills");

  return { props: { result } }
};
