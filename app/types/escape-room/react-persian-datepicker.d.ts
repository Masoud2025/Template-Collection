declare module 'react-persian-datepicker' {
  import { Component } from 'react';
  
  export interface DatePickerProps {
    value?: Date | null;
    onChange?: (date: Date) => void;
    placeholder?: string;
    className?: string;
    format?: string;
    min?: Date;
    max?: Date;
    disabled?: boolean;
    showTodayButton?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }
  
  export default class DatePicker extends Component<DatePickerProps> {}
}