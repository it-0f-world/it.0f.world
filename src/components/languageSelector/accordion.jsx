import React from 'react';
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { motion, AnimatePresence } from 'framer-motion';
import FamilyList from './familyList';
import style from './languageSelector.module.css';

const RegionAccordion = ({ region, activeRegionId, setActiveRegionId, changeLanguage, currentLanguageCode }) => {
    const isActive = activeRegionId === region.id; // Determine if this region is active

    const toggleAccordion = () => {
        if (isActive) {
            setActiveRegionId(null); // Close the current region if it's already open
        } else {
            setActiveRegionId(region.id); // Open this region and close others
        }
    };

    return (
        <div key={region.id} className='mb-3 last:mb-0'>
            <button
                onClick={toggleAccordion}
                className={`${style.accordionButton} ${isActive ? style.activeAccordionButton : ''}`}
            >
                {region.region} {isActive ? <FiMinusCircle /> : <FiPlusCircle />}
            </button>
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={style.description}
                    >
                        {region.families.map(family => (
                            <FamilyList
                                key={family.id}
                                family={family}
                                changeLanguage={changeLanguage}
                                currentLanguageCode={currentLanguageCode}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default RegionAccordion;