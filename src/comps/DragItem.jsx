import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';
const DraggableItem = ({ size, id, number, status }) => {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({
      id: id,
      transition: {
        duration: 500,
        easing: 'cubic-bezier(0.25,1,0.5,1)',
      },
    });
  const styles = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={styles}
      className={`${
        size === 'M' ? 'h-24' : 'h-48'
      } w-40 flex flex-col border-2 border-slate-400 select-none justify-between text-center touch-none`}
      key={id}
    >
      <div>
        <span className="text-4xl text-fuchsia-500">{id}</span>
        {number}
      </div>
      <div>{status}</div>
    </div>
  );
};

export default DraggableItem;
