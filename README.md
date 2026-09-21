Console Card Game

```
src/
  main.ts
  core/
    Game.ts             → stavový automat: StartTurn → Main → EndTurn → …
    GameState.ts        → oba hráči, kdo je na tahu, číslo tahu, log
    Random.ts           → seedovaný PRNG (míchání balíčku!)
    EventBus.ts         → události: onPlay, onDeath, onTurnStart, onDamage
  cards/
    Card.ts             → abstract: id, jméno, cena, abstract play(ctx)
    MinionCard.ts       → vytvoří Minion na stole
    SpellCard.ts        → efekt hned
    effects/            → Effect interface + implementace (Damage, Heal, Buff, Draw, Summon)
    Keyword.ts          → enum Taunt | Charge | Deathrattle | Battlecry
    definitions/        → data karet v JSON (ne v kódu!)
    CardFactory.ts      → JSON → instance karty
  board/
    Player.ts           → hrdina, mana, ruka, balíček, hřbitov
    Minion.ts           → atk, hp, keywords, canAttack, takeDamage()
    Deck.ts             → Zasobnik<Card> (líznout = pop), shuffle(rng)
    Hand.ts             → limit 10 karet
  rules/
    TargetValidator.ts  → koho lze cílit (Taunt!), čisté funkce
    CombatResolver.ts   → útok minion→minion / minion→hrdina
    DeathSystem.ts      → úklid mrtvých + spuštění Deathrattle
  ai/
    IAgent.ts           → interface { chooseAction(state): Action }
    RandomAgent.ts
    GreedyAgent.ts      → hraje nejdražší kartu, útočí na hrdinu
  render/
    Renderer.ts         → interface
    ConsoleRenderer.ts
  input/
    CommandParser.ts    → "attack 1 2" → Action objekt (regex, validace)
```