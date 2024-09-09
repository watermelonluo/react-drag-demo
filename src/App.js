import { useEffect, useState } from 'react';
import obj from './list.json';
import { DndContext, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToParentElement } from '@dnd-kit/modifiers';
import DraggableItem from './comps/DragItem';
function App() {
  const [list, setList] = useState(obj.boxes);
  const sensors = useSensors(
    useSensor(TouchSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );
  useEffect(() => {
    setList(list.map((item, index) => ({ ...item, id: index + 1 })));
  }, []);

  const dragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      // 对数据进行修改
      const activeIndex = list.findIndex((i) => i.id === active.id);
      const overIndex = list.findIndex((i) => i.id === over?.id);
      const newlist = arrayMove(list, activeIndex, overIndex);
      setList(newlist);
    }
  };

  return (
    <DndContext modifiers={[restrictToParentElement]} onDragEnd={dragEnd}>
      <SortableContext
        strategy={rectSortingStrategy}
        items={list.map((item) => item.id)}
        sensors={sensors}
      >
        <div className="flex flex-wrap gap-4 justify-center p-6">
          {list.map((item) => (
            <DraggableItem key={item.id} {...item} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

export default App;
