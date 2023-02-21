'use client'
import type { NextPage } from 'next'
import { useFetch } from '../../utils/utils'
import React, { useState } from 'react'
import { SubscriptionModal } from '../../components/modal'
import { Table } from '../../components/table'

const Notifications: NextPage = () => {
  const [subscriptionOffset, setSubscriptionOffset] = useState(0)
  const [webhookOffset, setWebhookOffset] = useState(0)
  const { data, isLoading, mutate } = useFetch(`/api/subscription?pageSize=10&offset=${subscriptionOffset}`)

  const subscriptionTable = [
    {
      name: 'id',
      label: 'Id',
    },
    {
      name: 'address',
      label: 'Address',
    },
    {
      name: 'chain',
      label: 'Chain',
    },
    {
      name: 'url',
      label: 'Url',
    },
  ]

  const webhookTable = [
    {
      name: 'id',
      label: 'Id',
    },
    {
      name: 'url',
      label: 'Url',
    },
    {
      name: 'timestamp',
      label: 'Timestamp',
    },
    {
      name: 'type',
      label: 'Type',
    },
    {
      name: 'subscriptionId',
      label: 'Subscription Id',
    },
    {
      name: 'retryCount',
      label: 'Retry Count',
    },
    {
      name: 'failed',
      label: 'Failed',
    },
    {
      name: 'data',
      label: 'Data',
      popover: true,
    },

  ]

  const { data: webhooks, isLoading: webhooksLoading, mutate: webhooksRefresh } = useFetch(`/api/webhook?pageSize=10&offset=${webhookOffset}`)

  const deleteSubscription = async (id: string) => {
    await fetch(`/api/subscription/${id}`, {
      method: 'DELETE',
    })
    await mutate()
  }

  return (
    <div>
      <div className='font-Poppins flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <h1
          className='text-8xl my-5'>
          Notifications
        </h1>

        <h4
          className='text-3xl my-5'>
          Subscriptions
        </h4>
        <Table attributes={subscriptionTable} isLoading={isLoading} actions={{ delete: deleteSubscription }} offset={subscriptionOffset} setOffset={setSubscriptionOffset}
               data={data} />
        <SubscriptionModal refreshSubscriptions={mutate} />
        <h4
          className='text-3xl my-5'>
          Webhooks
        </h4>
        <Table attributes={webhookTable} isLoading={webhooksLoading} data={webhooks} offset={webhookOffset}  setOffset={setWebhookOffset} />

      </div>
    </div>
  )
}

export default Notifications
