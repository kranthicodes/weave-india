'use client';

import Button from '@/app/_components/Button';
import Container from '@/app/_components/Container';
import React from 'react';
import Select, { StylesConfig } from 'react-select';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Success from './Success';
import Failed from './Failed';

const schema = yup
  .object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    phoneNumber: yup.string().required('Phone number is required'),
    amount: yup.string().required('Amount is required'),
    email: yup.string().required('Email is required'),
  })
  .required();

export default function DonateFormSection() {
  const [status, setStatus] = React.useState<
    'idle' | 'pending' | 'success' | 'failed'
  >('idle');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const countryCodes = [{ value: '91', label: '+91' }];
  const currencyOptions = [{ value: 'INR', label: 'INR' }];

  const colourStyles: StylesConfig = {
    control: (styles, state) => ({
      ...styles,
      height: '100%',
      outline: state.isFocused
        ? '2px solid rgb(18,74,61)'
        : '1px solid rgb(156,163,175)',
      borderRadius: '5px',
      '&:hover': {
        boxShadow: 'none',
      },
      boxShadow: 'none',
      border: 'none',
    }),
    indicatorSeparator: (styles) => ({ display: 'none' }),
    dropdownIndicator: (styles) => ({
      ...styles,
      padding: '0 6px 0 0',
    }),
    placeholder: (styles) => ({ ...styles, color: 'rgb(156,163,175)' }),
    // singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  };

  const createOrderId = async (
    currency: string,
    amount: string,
    name: string,
  ) => {
    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(amount) * 100,
          name,
          currency,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      return data.orderId;
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  const onSubmit = async (data: yup.InferType<typeof schema>) => {
    setStatus('pending');

    try {
      const orderId: string = await createOrderId(
        currencyOptions[0].value,
        data.amount,
        `${data.firstName} ${data.lastName}`,
      );
      console.log({ orderId });
      const options = {
        key: process.env.NEXT_PUBLIC_KEY_ID,
        amount: parseFloat(data.amount) * 100,
        currency: currencyOptions[0].value,
        name: `WEAVEINDIA Trust`,
        description: 'Join the movement, Donate for impact.',
        order_id: orderId,
        handler: async function (response: any) {
          const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          const result = await fetch('/api/verify', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
          });
          const res = await result.json();
          if (res.isOk) setStatus('success');
          else {
            setStatus('failed');
            console.error(res.message);
          }
        },
        prefill: {
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          contact: data.phoneNumber,
        },
        theme: {
          color: '#165A4A',
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on('payment.failed', function (response: any) {
        console.log(response.error.description);
        setStatus('idle');
      });
      paymentObject.open();
    } catch (error) {
      setStatus('failed');
      console.log({ error });
    }
    //console.log(data)
  };

  const getComponent = () => {
    let Component = null;

    if (status === 'success') {
      Component = Success;
    }

    if (status === 'failed') {
      Component = Failed;
    }

    return Component;
  };

  const handleTryAgain = () => {
    setStatus('idle');
  };

  const Component = getComponent();

  return (
    <div className="w-full py-[47px] bg-white flex justify-center items-center">
      <Container>
        {Component ? (
          <Component handleTryAgain={handleTryAgain} />
        ) : (
          <div className="flex flex-row justify-between gap-20">
            <div className="w-1/2 flex flex-col gap-9">
              <h1 className="text-xl">Enter your details</h1>
              <div className="flex flex-col w-full gap-6">
                <div className="flex w-full gap-10">
                  <div className="w-full">
                    <input
                      type="text"
                      {...register('firstName')}
                      placeholder="Frist Name"
                      className="px-3 outline-none focus:!border-eco-600 focus:border-[2px] text-xs w-full h-[48px] rounded-[5px] border-[1px] border-gray-400"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs italic mt-2">
                        {errors.firstName?.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      {...register('lastName')}
                      placeholder="Last Name"
                      className="px-3 outline-none focus:!border-eco-600 focus:border-[2px] text-xs w-full h-[48px] rounded-[5px] border-[1px] border-gray-400"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs italic mt-2">
                        {errors.lastName?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex w-full gap-10">
                  <div className="w-1/2 flex gap-4 items-start">
                    <Select
                      className="h-[48px] min-w-[70px] text-xs"
                      styles={colourStyles}
                      name="country"
                      options={countryCodes}
                      defaultValue={countryCodes[0]}
                      placeholder="+91"
                    />
                    <div className="w-full flex flex-col">
                      <input
                        type="text"
                        {...register('phoneNumber')}
                        placeholder="Enter your contact"
                        className="px-3 outline-none focus:!border-eco-600 focus:border-[2px] text-xs w-full h-[48px] rounded-[5px] border-[1px] border-gray-400"
                      />
                      {errors.phoneNumber && (
                        <p className="text-red-500 text-xs italic mt-2">
                          {errors.phoneNumber?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
                <div className="flex flex-col w-full">
                  <input
                    type="text"
                    {...register('email')}
                    placeholder="Enter your email"
                    className="px-3 outline-none focus:!border-eco-600 focus:border-[2px] text-xs w-full h-[48px] rounded-[5px] border-[1px] border-gray-400"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs italic mt-2">
                      {errors.email?.message}
                    </p>
                  )}
                </div>
                <div className="flex w-full gap-10">
                  <div className="w-1/2 flex gap-4">
                    <Select
                      className="h-[48px] min-w-[70px] text-xs"
                      styles={colourStyles}
                      name="currency"
                      options={currencyOptions}
                      defaultValue={currencyOptions[0]}
                      placeholder="INR"
                    />
                    <div className="w-full">
                      <input
                        type="text"
                        {...register('amount')}
                        placeholder="Amount"
                        className="px-3 outline-none focus:!border-eco-600 focus:border-[2px] text-xs w-full h-[48px] rounded-[5px] border-[1px] border-gray-400"
                      />
                      {errors.amount && (
                        <p className="text-red-500 text-xs italic mt-2">
                          {errors.amount?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              </div>
              <div className="flex flex-1 justify-center items-end">
                <Button
                  disabled={status === 'pending'}
                  isLoading={status === 'pending'}
                  onClick={handleSubmit(onSubmit)}
                  variant="solid"
                >
                  Donate now
                </Button>
              </div>
            </div>
            <div className="w-1/2">
              <div className="w-full min-h-[514px] gap-9 bg-[#EBF0EF] flex flex-col items-center justify-center px-[42px]">
                <h1 className="text-eco-600 text-[32px] font-bold italic leading-[120%] text-center">
                  “Join the movement,
                  <br /> Donate for impact.”
                </h1>
                <h3 className="text-eco-600 text-[32px] italic leading-[120%] text-center">
                  By supporting us, you&apos;re not just giving, you&apos;re
                  advocating for a cooler planet.
                </h3>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
