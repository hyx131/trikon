import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import { CalendarGrid } from '../components/calendar'


storiesOf("Calendar Grid", module)
.add("List", () => <CalendarGrid />)

