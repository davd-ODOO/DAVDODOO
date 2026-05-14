import Anthropic from '@anthropic-ai/sdk';
import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
app.use(express.json());

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const CALENDAR_LINK =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3otI3uAkfcarrsbKkR691YmvGwtn_62g_aBZSKC3CQEa1lYne1WTOPMg9MSa9379HLlvd6CeuA';

const DEFAULT_LEADS = [
  {
    name: 'Darren Mende',
    email: 'darren@dpmende.com',
    company: 'DP Mende & Co.',
    title: 'Founder, CPA, Fractional CFO',
    note: 'Tech-forward CPA who explicitly bridges accounting and technology; places clients on digital accounting software',
  },
  {
    name: 'Carmen Diep',
    email: 'carmen@goaltegic.com',
    company: 'GoalTegic, Inc.',
    title: 'Founder, CPA, FP&A Specialist',
    note: 'Specializes in bridging limited accounting software to new ERP systems; serves VC-backed startups',
  },
  {
    name: 'Joseph Bearden',
    email: 'joseph@beardenstroup.com',
    company: 'Bearden Stroup & Associates, CPAs',
    title: 'Partner, CPA',
    note: 'Partner at 11-50 person firm in Huntsville AL; reliable small business focus',
  },
];

async function generateEmail(lead) {
  const
