import { Request, Response } from "express";

interface Professional {
  id: number;
  name: string;
  image: string;
  specialty: string;
  locale: string;
  stars: number;
  reviews: number;
  price: number;
  time: number;
  description: string;
}

interface Availability {
  professionalId: number;
  availabilitySlots: AvailabilitySlot[];
}

interface AvailabilitySlot {
  start: string;
  end: string;
}

const professionals: Professional[] = [
  {
    id: 1,
    name: "John Doe",
    image: "../../assets/img/user.jpg",
    specialty: "Psychologist",
    locale: "Lisbon",
    stars: 5,
    reviews: 20,
    price: 60,
    time: 50,
    description:
      "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
];

const availabilities: Availability[] = [
  {
    professionalId: 1,
    availabilitySlots: [
      { start: "2020-07-17T16:00:00.000Z", end: "2020-07-17T17:00:00.000Z" },
      { start: "2020-07-17T16:30:00.000Z", end: "2020-07-17T17:30:00.000Z" },
      { start: "2020-07-17T17:00:00.000Z", end: "2020-07-17T18:00:00.000Z" },
      { start: "2020-07-17T17:30:00.000Z", end: "2020-07-17T18:30:00.000Z" },
      { start: "2020-07-17T18:00:00.000Z", end: "2020-07-17T19:00:00.000Z" },
      { start: "2020-07-17T18:30:00.000Z", end: "2020-07-17T19:30:00.000Z" },
      { start: "2020-07-17T19:00:00.000Z", end: "2020-07-17T20:00:00.000Z" },
      { start: "2020-07-17T19:30:00.000Z", end: "2020-07-17T20:30:00.000Z" },
      { start: "2020-07-17T20:00:00.000Z", end: "2020-07-17T21:00:00.000Z" },
      { start: "2020-07-18T17:00:00.000Z", end: "2020-07-18T18:00:00.000Z" },
      { start: "2020-07-18T17:30:00.000Z", end: "2020-07-18T18:30:00.000Z" },
      { start: "2020-07-18T18:00:00.000Z", end: "2020-07-18T19:00:00.000Z" },
      { start: "2020-07-18T18:30:00.000Z", end: "2020-07-18T19:30:00.000Z" },
      { start: "2020-07-18T19:00:00.000Z", end: "2020-07-18T20:00:00.000Z" },
      { start: "2020-07-18T19:30:00.000Z", end: "2020-07-18T20:30:00.000Z" },
      { start: "2020-07-18T20:00:00.000Z", end: "2020-07-18T21:00:00.000Z" },
      { start: "2020-07-18T20:30:00.000Z", end: "2020-07-18T21:30:00.000Z" },
      { start: "2020-07-18T21:00:00.000Z", end: "2020-07-18T22:00:00.000Z" },
      { start: "2020-07-18T21:30:00.000Z", end: "2020-07-18T22:30:00.000Z" },
      { start: "2020-07-18T22:00:00.000Z", end: "2020-07-18T23:00:00.000Z" },
      { start: "2020-07-18T22:30:00.000Z", end: "2020-07-18T23:30:00.000Z" },
      { start: "2020-07-18T23:00:00.000Z", end: "2020-07-19T00:00:00.000Z" },
      { start: "2020-07-18T23:30:00.000Z", end: "2020-07-19T00:30:00.000Z" },
      { start: "2020-07-19T00:00:00.000Z", end: "2020-07-19T01:00:00.000Z" },
      { start: "2020-07-20T16:30:00.000Z", end: "2020-07-20T17:30:00.000Z" },
      { start: "2020-07-20T17:00:00.000Z", end: "2020-07-20T18:00:00.000Z" },
      { start: "2020-07-20T17:30:00.000Z", end: "2020-07-20T18:30:00.000Z" },
      { start: "2020-07-20T18:00:00.000Z", end: "2020-07-20T19:00:00.000Z" },
      { start: "2020-07-20T18:30:00.000Z", end: "2020-07-20T19:30:00.000Z" },
      { start: "2020-07-20T19:00:00.000Z", end: "2020-07-20T20:00:00.000Z" },
      { start: "2020-07-20T19:30:00.000Z", end: "2020-07-20T20:30:00.000Z" },
      { start: "2020-07-20T20:00:00.000Z", end: "2020-07-20T21:00:00.000Z" },
      { start: "2020-07-20T20:30:00.000Z", end: "2020-07-20T21:30:00.000Z" },
      { start: "2020-07-20T21:00:00.000Z", end: "2020-07-20T22:00:00.000Z" },
      { start: "2020-07-20T21:30:00.000Z", end: "2020-07-20T22:30:00.000Z" },
      { start: "2020-07-20T22:00:00.000Z", end: "2020-07-20T23:00:00.000Z" },
      { start: "2020-07-20T22:30:00.000Z", end: "2020-07-20T23:30:00.000Z" },
      { start: "2020-07-20T23:00:00.000Z", end: "2020-07-21T00:00:00.000Z" },
      { start: "2020-07-20T23:30:00.000Z", end: "2020-07-21T00:30:00.000Z" },
      { start: "2020-07-21T00:00:00.000Z", end: "2020-07-21T01:00:00.000Z" },
      { start: "2020-07-21T16:00:00.000Z", end: "2020-07-21T17:00:00.000Z" },
      { start: "2020-07-21T16:30:00.000Z", end: "2020-07-21T17:30:00.000Z" },
      { start: "2020-07-21T17:00:00.000Z", end: "2020-07-21T18:00:00.000Z" },
      { start: "2020-07-21T17:30:00.000Z", end: "2020-07-21T18:30:00.000Z" },
      { start: "2020-07-21T18:00:00.000Z", end: "2020-07-21T19:00:00.000Z" },
      { start: "2020-07-21T18:30:00.000Z", end: "2020-07-21T19:30:00.000Z" },
      { start: "2020-07-21T19:00:00.000Z", end: "2020-07-21T20:00:00.000Z" },
      { start: "2020-07-21T19:30:00.000Z", end: "2020-07-21T20:30:00.000Z" },
      { start: "2020-07-21T20:00:00.000Z", end: "2020-07-21T21:00:00.000Z" },
      { start: "2020-07-21T20:30:00.000Z", end: "2020-07-21T21:30:00.000Z" },
      { start: "2020-07-21T21:00:00.000Z", end: "2020-07-21T22:00:00.000Z" },
      { start: "2020-07-23T10:00:00.000Z", end: "2020-07-23T11:00:00.000Z" },
      { start: "2020-07-23T10:30:00.000Z", end: "2020-07-23T11:30:00.000Z" },
      { start: "2020-07-23T11:00:00.000Z", end: "2020-07-23T12:00:00.000Z" },
      { start: "2020-07-23T11:30:00.000Z", end: "2020-07-23T12:30:00.000Z" },
      { start: "2020-07-23T12:00:00.000Z", end: "2020-07-23T13:00:00.000Z" },
      { start: "2020-07-23T12:30:00.000Z", end: "2020-07-23T13:30:00.000Z" },
      { start: "2020-07-23T13:00:00.000Z", end: "2020-07-23T14:00:00.000Z" },
      { start: "2020-07-23T13:30:00.000Z", end: "2020-07-23T14:30:00.000Z" },
      { start: "2020-07-23T14:00:00.000Z", end: "2020-07-23T15:00:00.000Z" },
      { start: "2020-07-23T14:30:00.000Z", end: "2020-07-23T15:30:00.000Z" },
      { start: "2020-07-23T15:00:00.000Z", end: "2020-07-23T16:00:00.000Z" },
      { start: "2020-07-23T15:30:00.000Z", end: "2020-07-23T16:30:00.000Z" },
      { start: "2020-07-23T16:00:00.000Z", end: "2020-07-23T17:00:00.000Z" },
      { start: "2020-07-23T16:30:00.000Z", end: "2020-07-23T17:30:00.000Z" },
      { start: "2020-07-23T17:00:00.000Z", end: "2020-07-23T18:00:00.000Z" },
      { start: "2020-07-23T17:30:00.000Z", end: "2020-07-23T18:30:00.000Z" },
      { start: "2020-07-23T18:00:00.000Z", end: "2020-07-23T19:00:00.000Z" },
      { start: "2020-07-23T18:30:00.000Z", end: "2020-07-23T19:30:00.000Z" },
      { start: "2020-07-23T19:00:00.000Z", end: "2020-07-23T20:00:00.000Z" },
      { start: "2020-07-23T19:30:00.000Z", end: "2020-07-23T20:30:00.000Z" },
      { start: "2020-07-23T20:00:00.000Z", end: "2020-07-23T21:00:00.000Z" },
      { start: "2020-07-23T20:30:00.000Z", end: "2020-07-23T21:30:00.000Z" },
      { start: "2020-07-23T21:00:00.000Z", end: "2020-07-23T22:00:00.000Z" },
      { start: "2020-07-24T16:00:00.000Z", end: "2020-07-24T17:00:00.000Z" },
      { start: "2020-07-24T16:30:00.000Z", end: "2020-07-24T17:30:00.000Z" },
      { start: "2020-07-24T17:00:00.000Z", end: "2020-07-24T18:00:00.000Z" },
      { start: "2020-07-24T17:30:00.000Z", end: "2020-07-24T18:30:00.000Z" },
      { start: "2020-07-24T18:00:00.000Z", end: "2020-07-24T19:00:00.000Z" },
      { start: "2020-07-24T18:30:00.000Z", end: "2020-07-24T19:30:00.000Z" },
      { start: "2020-07-24T19:00:00.000Z", end: "2020-07-24T20:00:00.000Z" },
      { start: "2020-07-24T19:30:00.000Z", end: "2020-07-24T20:30:00.000Z" },
      { start: "2020-07-24T20:00:00.000Z", end: "2020-07-24T21:00:00.000Z" },
      { start: "2020-07-24T20:30:00.000Z", end: "2020-07-24T21:30:00.000Z" },
      { start: "2020-07-24T21:00:00.000Z", end: "2020-07-24T22:00:00.000Z" },
      { start: "2020-07-24T21:30:00.000Z", end: "2020-07-24T22:30:00.000Z" },
      { start: "2020-07-24T22:00:00.000Z", end: "2020-07-24T23:00:00.000Z" },
      { start: "2020-07-24T22:30:00.000Z", end: "2020-07-24T23:30:00.000Z" },
      { start: "2020-07-24T23:00:00.000Z", end: "2020-07-25T00:00:00.000Z" },
      { start: "2020-07-25T17:00:00.000Z", end: "2020-07-25T18:00:00.000Z" },
      { start: "2020-07-25T17:30:00.000Z", end: "2020-07-25T18:30:00.000Z" },
      { start: "2020-07-25T18:00:00.000Z", end: "2020-07-25T19:00:00.000Z" },
      { start: "2020-07-25T18:30:00.000Z", end: "2020-07-25T19:30:00.000Z" },
      { start: "2020-07-25T19:00:00.000Z", end: "2020-07-25T20:00:00.000Z" },
      { start: "2020-07-25T19:30:00.000Z", end: "2020-07-25T20:30:00.000Z" },
      { start: "2020-07-25T20:00:00.000Z", end: "2020-07-25T21:00:00.000Z" },
      { start: "2020-07-25T20:30:00.000Z", end: "2020-07-25T21:30:00.000Z" },
      { start: "2020-07-25T21:00:00.000Z", end: "2020-07-25T22:00:00.000Z" },
      { start: "2020-07-25T21:30:00.000Z", end: "2020-07-25T22:30:00.000Z" },
      { start: "2020-07-25T22:00:00.000Z", end: "2020-07-25T23:00:00.000Z" },
      { start: "2020-07-25T22:30:00.000Z", end: "2020-07-25T23:30:00.000Z" },
      { start: "2020-07-25T23:00:00.000Z", end: "2020-07-26T00:00:00.000Z" },
      { start: "2020-07-25T23:30:00.000Z", end: "2020-07-26T00:30:00.000Z" },
      { start: "2020-07-26T00:00:00.000Z", end: "2020-07-26T01:00:00.000Z" },
      { start: "2020-07-27T16:30:00.000Z", end: "2020-07-27T17:30:00.000Z" },
      { start: "2020-07-27T17:00:00.000Z", end: "2020-07-27T18:00:00.000Z" },
      { start: "2020-07-27T17:30:00.000Z", end: "2020-07-27T18:30:00.000Z" },
      { start: "2020-07-27T18:00:00.000Z", end: "2020-07-27T19:00:00.000Z" },
      { start: "2020-07-27T18:30:00.000Z", end: "2020-07-27T19:30:00.000Z" },
      { start: "2020-07-27T19:00:00.000Z", end: "2020-07-27T20:00:00.000Z" },
      { start: "2020-07-27T19:30:00.000Z", end: "2020-07-27T20:30:00.000Z" },
      { start: "2020-07-27T20:00:00.000Z", end: "2020-07-27T21:00:00.000Z" },
      { start: "2020-07-27T20:30:00.000Z", end: "2020-07-27T21:30:00.000Z" },
      { start: "2020-07-27T21:00:00.000Z", end: "2020-07-27T22:00:00.000Z" },
      { start: "2020-07-27T21:30:00.000Z", end: "2020-07-27T22:30:00.000Z" },
      { start: "2020-07-27T22:00:00.000Z", end: "2020-07-27T23:00:00.000Z" },
      { start: "2020-07-27T22:30:00.000Z", end: "2020-07-27T23:30:00.000Z" },
      { start: "2020-07-27T23:00:00.000Z", end: "2020-07-28T00:00:00.000Z" },
      { start: "2020-07-27T23:30:00.000Z", end: "2020-07-28T00:30:00.000Z" },
      { start: "2020-07-28T00:00:00.000Z", end: "2020-07-28T01:00:00.000Z" },
      { start: "2020-07-28T16:00:00.000Z", end: "2020-07-28T17:00:00.000Z" },
      { start: "2020-07-28T16:30:00.000Z", end: "2020-07-28T17:30:00.000Z" },
      { start: "2020-07-28T17:00:00.000Z", end: "2020-07-28T18:00:00.000Z" },
      { start: "2020-07-28T17:30:00.000Z", end: "2020-07-28T18:30:00.000Z" },
      { start: "2020-07-28T18:00:00.000Z", end: "2020-07-28T19:00:00.000Z" },
      { start: "2020-07-28T18:30:00.000Z", end: "2020-07-28T19:30:00.000Z" },
      { start: "2020-07-28T19:00:00.000Z", end: "2020-07-28T20:00:00.000Z" },
      { start: "2020-07-28T19:30:00.000Z", end: "2020-07-28T20:30:00.000Z" },
      { start: "2020-07-28T20:00:00.000Z", end: "2020-07-28T21:00:00.000Z" },
      { start: "2020-07-28T20:30:00.000Z", end: "2020-07-28T21:30:00.000Z" },
      { start: "2020-07-28T21:00:00.000Z", end: "2020-07-28T22:00:00.000Z" },
      { start: "2020-07-30T10:00:00.000Z", end: "2020-07-30T11:00:00.000Z" },
      { start: "2020-07-30T10:30:00.000Z", end: "2020-07-30T11:30:00.000Z" },
      { start: "2020-07-30T11:00:00.000Z", end: "2020-07-30T12:00:00.000Z" },
      { start: "2020-07-30T11:30:00.000Z", end: "2020-07-30T12:30:00.000Z" },
      { start: "2020-07-30T12:00:00.000Z", end: "2020-07-30T13:00:00.000Z" },
      { start: "2020-07-30T12:30:00.000Z", end: "2020-07-30T13:30:00.000Z" },
      { start: "2020-07-30T13:00:00.000Z", end: "2020-07-30T14:00:00.000Z" },
      { start: "2020-07-30T13:30:00.000Z", end: "2020-07-30T14:30:00.000Z" },
      { start: "2020-07-30T14:00:00.000Z", end: "2020-07-30T15:00:00.000Z" },
      { start: "2020-07-30T14:30:00.000Z", end: "2020-07-30T15:30:00.000Z" },
      { start: "2020-07-30T15:00:00.000Z", end: "2020-07-30T16:00:00.000Z" },
      { start: "2020-07-30T15:30:00.000Z", end: "2020-07-30T16:30:00.000Z" },
      { start: "2020-07-30T16:00:00.000Z", end: "2020-07-30T17:00:00.000Z" },
      { start: "2020-07-30T16:30:00.000Z", end: "2020-07-30T17:30:00.000Z" },
      { start: "2020-07-30T17:00:00.000Z", end: "2020-07-30T18:00:00.000Z" },
      { start: "2020-07-30T17:30:00.000Z", end: "2020-07-30T18:30:00.000Z" },
      { start: "2020-07-30T18:00:00.000Z", end: "2020-07-30T19:00:00.000Z" },
      { start: "2020-07-30T18:30:00.000Z", end: "2020-07-30T19:30:00.000Z" },
      { start: "2020-07-30T19:00:00.000Z", end: "2020-07-30T20:00:00.000Z" },
      { start: "2020-07-30T19:30:00.000Z", end: "2020-07-30T20:30:00.000Z" },
      { start: "2020-07-30T20:00:00.000Z", end: "2020-07-30T21:00:00.000Z" },
      { start: "2020-07-30T20:30:00.000Z", end: "2020-07-30T21:30:00.000Z" },
      { start: "2020-07-30T21:00:00.000Z", end: "2020-07-30T22:00:00.000Z" },
      { start: "2020-07-31T16:00:00.000Z", end: "2020-07-31T17:00:00.000Z" },
      { start: "2020-07-31T16:30:00.000Z", end: "2020-07-31T17:30:00.000Z" },
      { start: "2020-07-31T17:00:00.000Z", end: "2020-07-31T18:00:00.000Z" },
      { start: "2020-07-31T17:30:00.000Z", end: "2020-07-31T18:30:00.000Z" },
      { start: "2020-07-31T18:00:00.000Z", end: "2020-07-31T19:00:00.000Z" },
      { start: "2020-07-31T18:30:00.000Z", end: "2020-07-31T19:30:00.000Z" },
      { start: "2020-07-31T19:00:00.000Z", end: "2020-07-31T20:00:00.000Z" },
      { start: "2020-07-31T19:30:00.000Z", end: "2020-07-31T20:30:00.000Z" },
      { start: "2020-07-31T20:00:00.000Z", end: "2020-07-31T21:00:00.000Z" },
      { start: "2020-07-31T20:30:00.000Z", end: "2020-07-31T21:30:00.000Z" },
      { start: "2020-07-31T21:00:00.000Z", end: "2020-07-31T22:00:00.000Z" },
      { start: "2020-07-31T21:30:00.000Z", end: "2020-07-31T22:30:00.000Z" },
      { start: "2020-07-31T22:00:00.000Z", end: "2020-07-31T23:00:00.000Z" },
      { start: "2020-07-31T22:30:00.000Z", end: "2020-07-31T23:30:00.000Z" },
      { start: "2020-07-31T23:00:00.000Z", end: "2020-08-01T00:00:00.000Z" },
      { start: "2020-08-01T18:30:00.000Z", end: "2020-08-01T19:30:00.000Z" },
      { start: "2020-08-01T19:00:00.000Z", end: "2020-08-01T20:00:00.000Z" },
      { start: "2020-08-01T19:30:00.000Z", end: "2020-08-01T20:30:00.000Z" },
      { start: "2020-08-01T20:00:00.000Z", end: "2020-08-01T21:00:00.000Z" },
      { start: "2020-08-01T20:30:00.000Z", end: "2020-08-01T21:30:00.000Z" },
      { start: "2020-08-01T21:00:00.000Z", end: "2020-08-01T22:00:00.000Z" },
      { start: "2020-08-01T21:30:00.000Z", end: "2020-08-01T22:30:00.000Z" },
      { start: "2020-08-01T22:00:00.000Z", end: "2020-08-01T23:00:00.000Z" },
      { start: "2020-08-01T22:30:00.000Z", end: "2020-08-01T23:30:00.000Z" },
      { start: "2020-08-01T23:00:00.000Z", end: "2020-08-01T00:00:00.000Z" },
    ],
  },
];

export default {
  // eslint-disable-next-line
  async index(req: Request, res: Response): Promise<any> {
    const professionalId = req.params.id;

    const professional = professionals.find((data) => {
      return data.id.toString() === professionalId;
    });

    if (!professional) {
      return res.status(404).send("Cannot find this professional");
    }
    return res.json(professional);
  },
  // eslint-disable-next-line
  async availability(req: Request, res: Response): Promise<any> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    const professionalId = req.params.id;
    const professional = professionals.find((data) => {
      return data.id.toString() === professionalId;
    });
    const availability = availabilities.find((data) => {
      return data.professionalId.toString() === professionalId;
    });

    if (!professional) {
      return res.status(404).send("Cannot find this professional");
    }
    if (!availability) {
      return res.status(404).send("Cannot find this availability");
    }
    if (startDate && endDate) {
      const availabilitySpots = availability.availabilitySlots.filter(
        (data) => {
          const date = data.start;
          return startDate <= date && date <= endDate;
        }
      );
      return res.json(availabilitySpots);
    }
    return res
      .status(400)
      .send("Missing params! startDate or/and endDate is missing");
  },
};
