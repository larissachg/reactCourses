import { useMemo, Dispatch } from "react";
import { Activity } from "../types";
import { categories } from "../data/categories";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { ActivityActions } from "../reducers/activityReducer";

type ActivityListProps = {
  activities: Activity[];
  dispatch: Dispatch<ActivityActions>;
};

export default function ActivityList({
  activities,
  dispatch,
}: ActivityListProps) {
  const categoryName = useMemo(
    () => (category: Activity["category"]) =>
      categories.map((cat) => (cat.id === category ? cat.name : "")),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activities]
  );

  const isEmptyActivities = useMemo(
    () => activities.length === 0,
    [activities]
  );

  return (
    <>
      <h2 className="text-4xl font-bold text-center text-slate-600">
        Comida y Actividades
      </h2>

      {isEmptyActivities ? (
        <p className="mt-5 text-center">No hay actividades aun...</p>
      ) : (
        activities.map((activity) => (
          <div
            key={activity.id}
            className="flex justify-between px-5 py-10 mt-5 bg-white shadow"
          >
            <div className="relative space-y-2">
              <p
                className={`absolute px-10 py-2 font-bold text-white uppercase -top-8 -left-8 ${
                  activity.category === 1 ? "bg-lime-500" : "bg-orange-500"
                }`}
              >
                {categoryName(+activity.category)}
              </p>

              <p className="pt-5 text-2xl font-bold">{activity.name}</p>
              <p className="text-4xl font-black text-lime-500">
                {activity.calories} {""} <span>Calorias</span>
              </p>
            </div>

            <div className="flex items-center gap-5">
              <button
                onClick={() =>
                  dispatch({
                    type: "set-activeId",
                    payload: { id: activity.id },
                  })
                }
              >
                <PencilSquareIcon className="w-8 h-8 text-gray-800" />
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type: "delete-activity",
                    payload: { id: activity.id },
                  })
                }
              >
                <XCircleIcon className="w-8 h-8 text-red-500" />
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
}
