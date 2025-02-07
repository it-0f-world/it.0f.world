import LanguageSelector from '../../components/languageSelector/languageSelector';
import { AnimatePresence, motion } from 'framer-motion';

export default function ModalLanguages ({ onClose, onLanguageChange }) {
    return (
        <motion.div
            className={style.overlay}
            onClick={onClose}
            initial={{opacity: 0 }}
            animate={{opacity: 1 }}
            exit={{opacity: 0 }}
        >
            <motion.div
                className={style.modalCard}
                onClick={onClose}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition ={{ type: "spring", stiffness: 400, damping: 25 }}
            >
                <LanguageSelector onLanguageChange={onLanguageChange} />
                <button onClick={onClose}>Close</button>
            </motion.div>
        </motion.div>
    )
}