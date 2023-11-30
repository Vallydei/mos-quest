import React from 'react';
import { FiChevronDown, FiYoutube, FiFeather, FiCoffee, FiCompass } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { setSelectedLocations } from '../../redux/slices/locations/locationSlices';
import { useAppDispatch } from '../../redux/hooks';

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <motion.div animate={open ? 'open' : 'closed'} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-6 py-2 rounded-md text-indigo-50 bg-purple-600 hover:bg-purple-700 transition-colors text-2xl"
        >
          <span className="font-medium text-xl uppercase  tracking-wider">Варианты</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: 'top', translateX: '-50%' }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-gray-900 shadow-xl absolute top-[120%] left-[50%] w-[100%] overflow-hidden"
        >
          <Option setOpen={setOpen} Icon={FiCompass} text="Всё" value="4" />
          <Option setOpen={setOpen} Icon={FiCoffee} text="Бары" value="1" />
          <Option setOpen={setOpen} Icon={FiYoutube} text="Гик Стаф" value="2" />
          <Option setOpen={setOpen} Icon={FiFeather} text="Осознанность" value="3" />
        </motion.ul>
      </motion.div>
    </div>
  );
};

type OptionProps = {
  text: String;
  Icon: typeof FiFeather;
  value: String;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Option = ({ text, Icon, setOpen, value }: OptionProps) => {
  const dispatch = useAppDispatch();
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        dispatch(setSelectedLocations(Number(value)));
        setOpen(false);
      }}
      className="flex items-center gap-2 w-full p-2  text-base font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-white hover:text-purple-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: 'afterChildren',
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
