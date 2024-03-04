import React from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import faq from '../assets/faq.png'

const FAQ = () => {
    return (
        <div className='flex flex-col-reverse  md:flex-row gap-5 justify-between items-center p-5 my-4'>
            <div className='basis-1/2'>
                <Accordion className='my-10 p-5'>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What harsh truths do you prefer to ignore?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                cupidatat occaecat ut occaecat consequat est minim minim
                                esse tempor laborum consequat esse adipisicing eu
                                reprehenderit enim.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Is free will real or just an illusion?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                In ad velit in ex nostrud dolore cupidatat consectetur
                                ea in ut nostrud velit in irure cillum tempor laboris
                                sed adipisicing eu esse duis nulla non.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What animals are available for adoption?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                We have a variety of animals available for adoption, including dogs, cats, rabbits, birds, and more. Our selection varies depending on the animals currently in our care.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What are the adoption fees?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Our adoption fees vary depending on the type of animal and their age. The fee typically covers vaccinations, spaying/neutering, microchipping, and other medical expenses. Please inquire at our shelter for specific adoption fees.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className=''>
                <img className='w-96' src={faq} alt="" />
            </div>
        </div>
    );
};

export default FAQ;