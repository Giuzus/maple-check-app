import React, { FC } from 'react';
import { Button, Container, Form, Tab, Tabs } from 'react-bootstrap';
import styles from './checklists.module.css';

interface ChecklistsProps { }

function renderCheckbox(label: string, id: string) {
  return (
    <Form.Check
      type={'checkbox'}
      id={id}
      label={label}
    />
  )
}

function uncheckAll() {
  const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type=checkbox]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
}

const Checklists: FC<ChecklistsProps> = () => (
  <Container>
    <div data-testid="Checklists" className={styles.checklistsContainer}>
      <Tabs justify className={styles.tabBorder}>
        <Tab eventKey="bossing" title="Bossing">
          <h2>Passive</h2>
          {renderCheckbox("Link skills", "bossing-linkSkills")}
          {renderCheckbox("Legion grid", "bossing-legionGrid")}
          {renderCheckbox("Hyper stats", "bossing-hyperStats")}
          {renderCheckbox("Hyper skills", "bossing-hyperSkills")}
          {renderCheckbox("Familiars", "bossing-familiars")}
          {renderCheckbox("Skill transparency", "bossing-skillTransparency")}

          <h2>Buffs</h2>
          {renderCheckbox("Advanced boss rush potion", "bossing-advancedBossRushPotion")}
          {renderCheckbox("Monster park boost potions", "bossing-monsterParkBoostPotions")}
          {renderCheckbox("Legion attack buff", "bossing-legionAttackBuff")}
          {renderCheckbox("Guild attack buff", "bossing-guildAttackBuff")}
          {renderCheckbox("Guild environment buff", "bossing-guildEnvironmentBuff")}
          {renderCheckbox("MVP damage coupon", "bossing-mvpDamageCoupon")}
          {renderCheckbox("Buff freezers", "bossing-buffFreezers")}

          <h2>Equip</h2>
          {renderCheckbox("Damage gear", "bossing-damageGear")}
        </Tab>

        <Tab eventKey="leveling" title="Leveling">
          <h2>Passive</h2>
          {renderCheckbox("Link skills", "leveling-linkSkills")}
          {renderCheckbox("Legion grid", "leveling-legionGrid")}
          {renderCheckbox("Hyper stats", "leveling-hyperStats")}
          {renderCheckbox("101 to 200 passive guild skill", "leveling-101To200PassiveGuildSkill")}
          {renderCheckbox("Drop/Meso drop Familiars", "leveling-dropMesoDropFamiliars")}
          <h2>Buffs</h2>
          {renderCheckbox("2x coupon", "leveling-2xCoupon")}
          <label className='text-secondary'>- If between level 100 and 180, use legion growth potion</label>
          {renderCheckbox("EXP accumulation potion", "leveling-expAccumulationPotion")}
          {renderCheckbox("Wealth potion", "leveling-wealthPotion")}
          {renderCheckbox("Monster park boost potions", "leveling-monsterParkBoostPotions")}
          {renderCheckbox("Legion attack buff", "leveling-legionAttackBuff")}
          {renderCheckbox("Guild environment buff", "leveling-guildEnvironmentBuff")}
          {renderCheckbox("MVP damage coupon", "leveling-mvpDamageCoupon")}
          <h2>Equip</h2>
          {renderCheckbox("Pendant of the spirit", "leveling-pendantOfTheSpirit")}
          {renderCheckbox("Drop/Meso drop items", "leveling-dropMesoDropItems")}
        </Tab>
      </Tabs>
    </div>
    <Button onClick={uncheckAll}>Uncheck all</Button>
  </Container>
);

export default Checklists;
