import type { PlayerCardProps } from './types';
import type { FC } from 'react';

import { colorMap } from 'utils/ColorMap';

export const PlayerCard: FC<PlayerCardProps> = ({ player }) => {
  return (
    <div>
      <div className="flex justify-between mb-4 items-start">
        <div className="font-medium dark:text-white flex flex-col gap-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            {player.name}{' '}
            <span className="block text-sm text-gray-500 dark:text-gray-400">
              {player.record.wins}-{player.record.losses}-{player.record.ties}
            </span>
          </h5>
          <p>
            Current Standing{' '}
            <span className="block text-sm text-gray-500 dark:text-gray-400">{player.placing}</span>
          </p>
          <p>
            Resistance{' '}
            <span className="block text-sm text-gray-500 dark:text-gray-400">
              {player.resistances.opp}
            </span>
          </p>
        </div>
      </div>
      <hr />
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {Object.keys(player.rounds)
            .reverse()
            .map(round => {
              return (
                <li className="py-3 sm:py-4" key={round}>
                  <div className="flex items-center">
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Round {round} - Table {player.rounds[round].table}
                      </p>
                      <div className="flex justify-between">
                        <p>{player.rounds[round].name}</p>
                        <p className={colorMap[player.rounds[round].result]}>
                          {player.rounds[round].result}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
