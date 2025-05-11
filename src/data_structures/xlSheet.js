export class xlSheet {    
  #originalNewLines;
  #originalOldLines;
  newLines;
  oldLines;

  constructor(data)
  {
    this.name = data.sheetName;
    this.#originalNewLines = data.originalNewLines;
    this.#originalOldLines = data.originalOldLines;
  }

  filter(changesOnly)
  {
    if (changesOnly)
    {
      this.newLines = [this.#originalNewLines[0], ...this.#originalNewLines.slice(1).filter(line => line.type !== 0)];
      this.oldLines = [this.#originalOldLines[0], ...this.#originalOldLines.slice(1).filter(line => line.type !== 0)];
    }
    else
    {
      this.newLines = this.#originalNewLines;
      this.oldLines = this.#originalOldLines;
    }
  }
}