import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react';
import { BookingForm } from '../BookingForm'

describe("Booking Form", () => {})

test('Renders the BookingForm time label ', () => {
render(<BookingForm/>);
    const labelElement = screen.getByText("Choose time");
    expect(labelElement).toBeInTheDocument();
})