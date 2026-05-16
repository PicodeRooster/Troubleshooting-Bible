---
title: Electrostatic Discharge Safety
type: encyclopedia
tags:
  - safety
  - operations
  - hardware
sources:
  - CompTIA A+
  - Sanken
---
# Electrostatic Discharge Safety

Electrostatic discharge (ESD) is the sudden flow of electric current that occurs when two differently charged objects come into contact. It is a high-risk factor in electronics work: ESD can destroy or degrade sensitive components instantly, and it occurs even when a device is powered off, since residual charge in components is sufficient to cause damage. A safe ESD target for environments handling semiconductor devices is a static electricity level of 100 V or less.

ESD damage is often invisible — a component can sustain a partial discharge that degrades its reliability without producing any immediately observable failure. This makes prevention the only reliable strategy.

---

## Setting Up an ESD-Safe Environment

The workspace itself is the first line of defense.

- **Remove ESD-prone materials** from the work area. Insulators such as chemical fiber materials and plastics accumulate charge easily and should be kept away from components.
- **Use conductive or static-dissipative surfaces and containers.** Workbenches, floor mats, and storage containers should all be antistatic or conductive. Store and transport semiconductor devices in antistatic or conductive containers — never in ordinary plastic bags or trays.
- **Maintain humidity.** Static charge buildup on the human body decreases significantly as relative humidity rises. During dry seasons or in air-conditioned environments, use a humidifier to maintain appropriate ambient humidity. Use purified water in humidifiers to prevent rust on equipment terminals. Note: semiconductor devices in moisture-barrier packaging are sensitive to high humidity, so balance accordingly.
- **Install ionizers where needed.** Ionizers neutralize charged potentials in situations where grounding alone is insufficient — particularly during operations that involve peeling, friction, or other charge-generating actions. Ensure ionizers cover the effective neutralization range of the work area.

---

## Personal Protective Practices

**Wrist straps**

Wear an antistatic wrist strap connected to a proper ground point — the chassis of the equipment being worked on or a dedicated ground point. Commercially available wrist straps include a built-in resistor of approximately 1 MΩ in series between the operator and ground. This resistor is intentional: it is large enough to safely limit current in the event of accidental contact with a live circuit, while small enough to allow continuous charge dissipation. Do not use a wrist strap without this resistor.

**Clothing and footwear**

Wear antistatic working clothes and shoes when handling ESD-sensitive devices. Appropriate resistance for antistatic footwear is generally 100 kΩ to 100 MΩ. Contaminated shoe soles or dirty antistatic floors reduce static elimination effectiveness — both should be cleaned periodically.

**Handling technique**

- Handle components by their edges. Avoid touching connector pins, solder pads, and exposed circuitry.
- Minimize the number of times a component is handled and keep handling time as short as possible — each additional contact is an additional opportunity for discharge.
- Keep components in their antistatic packaging until the moment they are needed.

---

## Equipment and Tooling

All equipment in contact with or near ESD-sensitive devices must be properly grounded.

- **Workbenches and floor mats:** Use antistatic mats on the workbench surface and inside toolkit bags. Ensure mats are grounded and their resistance to ground is within specification.
- **Tools and jigs:** Ground all hand tools, jigs, and fixtures. Ungrounded metal tools can accumulate and transfer charge.
- **Soldering equipment:** When soldering a semiconductor device to a PCB, use a soldering iron designed for semiconductor work and ensure the iron tip is grounded.
- **Solder baths and production equipment:** Ground conveyors, solder baths, and all production line equipment.
- **Utility carts:** Use carts with conductive shelves and conductive casters that ground to the antistatic floor, creating a continuous grounding path for components in transit.

---

## Ionizer Maintenance

Ionizers are effective only when properly maintained. Their neutralization capability degrades over time as electrode needle tips become contaminated or worn.

**Periodic checks:**
- Verify neutralization capability
- Verify ionic balance

**Periodic maintenance:**
- Clean electrode needles regularly
- Replace electrode needles on the schedule specified by the manufacturer

Refer to the manufacturer's instruction manual for model-specific maintenance intervals and procedures.

---

## Periodic Inspections

ESD controls must be verified regularly — equipment that was compliant at installation may drift out of specification over time.

Inspect and measure the following on a defined schedule:

| Item | What to Check |
|------|--------------|
| Facilities, equipment, jigs, and fixtures | Static charge levels present |
| Antistatic mats | Resistance to ground |
| Antistatic floors, wrist straps, and shoes | Resistance values within specification |
| Ionizers | Neutralization capability and ionic balance |

Wrist straps in particular are subject to wear and should be tested before each use with a wrist strap tester if available.

---

## ESD Sensitivity Testing Models

ESD sensitivity ratings on semiconductor datasheets are derived from standardized test models. Each simulates a different real-world discharge scenario.

| Model | Simulates | Test Conditions |
|-------|-----------|-----------------|
| **Human Body Model (HBM)** | Discharge from a charged human body to a device | 100 pF capacitor, 1.5 kΩ discharging resistor |
| **Machine Model (MM)** | Discharge from charged machine equipment | 200 pF capacitor, 0 Ω discharging resistor (now a reference standard) |
| **Charged Device Model (CDM)** | Device itself becomes charged via friction with jigs or proximity to charged objects | 1 Ω discharging resistor |
| **Charged Package Model (CPM)** | Device package inductively charged by a high electrical field | 0 Ω discharging resistor |

HBM is the most commonly cited rating in component specifications. CDM is increasingly important in automated assembly environments where devices are handled by machines rather than people.
