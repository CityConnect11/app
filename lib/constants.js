export const MODE_PRIVATE = {
  key: 'private',
  label: 'privat',
  value: 0,
}

export const MODE_BUSINESS = {
  key: 'business',
  label: 'geschäftlich',
  value: 1,
}

const modes = [ MODE_PRIVATE, MODE_BUSINESS]

export const resolveModeByValue = value => 
  modes.find(mode => mode.value === value);

export const resolveModeByKey = key => 
  modes.find(mode => mode.key === key);