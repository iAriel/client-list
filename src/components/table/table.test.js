import React from 'react'
import {ClientsTable} from './index'

import { render, screen } from '@testing-library/react'

describe('table component', () => {
    it("should be with a table of ten lines", async () => {
        render(<ClientsTable/>)
        

        await expect(screen.getByText('LEANNE GRAHAM')).toBeInTheDocument();
    });
});