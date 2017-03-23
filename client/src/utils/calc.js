export function calcLvl(exp) {
  for (let lvl = 1; lvl < 50; lvl++) {
    let exptolvl = lvl * lvl * 10
    let exp = (exp - exptolvl)
    if (exptolvl > exp) {
      return {lvl: lvl, tolvl: exp, thislvl: exptolvl}
    }
  }
}
