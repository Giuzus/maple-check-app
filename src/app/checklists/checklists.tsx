import React, { FC } from 'react';
import { Container, Form, Tab, Tabs } from 'react-bootstrap';
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

const Checklists: FC<ChecklistsProps> = () => {

  return (
    <Container>
      <div data-testid="Checklists">
        <Tabs justify className={styles.tabBorder}>
          <Tab eventKey="bossing" title="Bossing">
            <h2>Passive</h2>
            {renderCheckbox("Link skills", "linkSkills")}
            {renderCheckbox("Legion grid", "legionGrid")}
            {renderCheckbox("Hyper stats", "hyperStats")}
            {renderCheckbox("Hyper skills", "hyperSkills")}
            {renderCheckbox("Familiars", "familiars")}


            <h2>Buffs</h2>
            {renderCheckbox("Advanced boss rush potion", "advancedBossRushPotion")}
            {renderCheckbox("Hyper stats", "hyperStats")}
            {renderCheckbox("Monster park boost potions", "monsterParkBoostPotions")}
            {renderCheckbox("Legion attack buff", "legionAttackBuff")}
            {renderCheckbox("Guild attack buff", "guildAttackBuff")}
            {renderCheckbox("Guild environment buff", "guildEnvironmentBuff")}
            {renderCheckbox("MVP damage coupon", "mvpDamageCoupon")}

            <h2>Equip</h2>
            {renderCheckbox("Damage gear", "mvpDamageCoupon")}

          </Tab>

          <Tab eventKey="leveling" title="Leveling">
            <h2>Passive</h2>
            {renderCheckbox("Link skills", "linkSkills")}
            {renderCheckbox("Legion grid", "legionGrid")}
            {renderCheckbox("Hyper stats", "hyperStats")}
            {renderCheckbox("101 to 200 passive guild skill", "101To200PassiveGuildSkill")}
            {renderCheckbox("Drop/Meso drop Familiars", "dropMesoDropFamiliars")}
            <h2>Buffs</h2>
            {renderCheckbox("2x coupon", "2xCoupon")}
            <label className='text-secondary'>- If between level 100 and 180, use legion growth potion</label>
            {renderCheckbox("EXP accumulation potion", "expAccumulationPotion")}
            {renderCheckbox("Wealth potion", "wealthPotion")}
            {renderCheckbox("Monster park boost potions", "monsterParkBoostPotions")}
            {renderCheckbox("Legion attack buff", "legionAttackBuff")}
            {renderCheckbox("Guild environment buff", "guildEnvironmentBuff")}
            {renderCheckbox("MVP damage coupon", "mvpDamageCoupon")}
            <h2>Equip</h2>
            {renderCheckbox("Pendant of the spirit", "pendantOfTheSpirit")}
            {renderCheckbox("Drop/Meso drop items", "dropMesoDropItems")}
          </Tab>
        </Tabs>
      </div>
    </Container>
  )
};

export default Checklists;
