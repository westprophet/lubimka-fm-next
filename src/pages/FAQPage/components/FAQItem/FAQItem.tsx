/**
 * Created by westp on 20.06.2022
 */

import React from 'react';
import s from './FAQItem.module.scss';
import cn from 'classnames';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export default function FAQItem({ className, detail, title, id }: IFAQItemProps) {
  return (
    <Accordion className={cn(s.FAQItem, className)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id={id}>
        <div className={cn(s.head)}>
          <IconButton>
            <QuestionMarkIcon />
          </IconButton>
          <h2>{title}</h2>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className={cn(s.detail)}>{detail}</div>
      </AccordionDetails>
    </Accordion>
  );
}

FAQItem.defaultProps = {
  className: '',
};

interface IFAQItemProps {
  className?: string;
  detail: string;
  title: string;
  id: string;
}
