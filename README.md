
## Tasks

1. All card elements can be dragged with the mouse.
    - All the `.card` elements can be picked up and dragged around
    - After picking up a card, the element that stays at the original position during the drag
 should be differentiated visually

2. Picked up cards can be dropped in the metamorphosis steps.
    - The cards can be dropped to the slots in the `.metamorphosis-slots` element
    - All `.card-slot` elements are active and visually highlighted when you pick up a card
    - When we hold an element over a drop zone, the highlight changes to show that we would drop the card there

3. We should be able to drop the cards back to the `.mixed-cards` container as well.
    - The cards can be dropped back to the `.mixed-cards` container
    - The `.mixed-cards` area is active and visually highlighted when you pick up a card
    - When we hold an element over the area, the highlight changes to show that we would drop the card there

4. Cards can only be dropped on allowed places.
    - The card slots in the frog/butterfly metamorphosis-container only accepts correct (frog/butterfly) cards
    - Any type of card can be dropped back to the `.mixed-cads` container
    - When we hold an element over a possible drop zone we can see if we can drop it there or not
    - Only one card can be dropped in a `.card-slot`
    - Only `.card` elements can be dropped in the in drop zones of the game (so for example if a file is dragged
 over the browser tab of the game, it should not trigger the zones)

5. We want to win the game when we get the correct order of the frog/butterfly metamorphosis.
    - When the last piece is dropped and every card is in the correct order we get a confirmation that we have finished the puzzle
    - Do some fancy CSS magic :)

