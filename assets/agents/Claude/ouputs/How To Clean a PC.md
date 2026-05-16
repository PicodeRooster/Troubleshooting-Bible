# How To Clean a PC

Regular physical cleaning is a core preventive maintenance task for any IT technician. Dust accumulation blocks airflow, causes thermal throttling, and accelerates hardware failure. In open-floor or industrial environments, cleaning intervals should be shortened accordingly. This guide covers a full physical cleaning of a desktop PC from a technician's perspective.

---

## Environmental Considerations

Before beginning, assess the environment the machine lives in. Dust is the primary concern — it blocks airflow, overheats components, and can gum up fans and power supplies. Ideal operating conditions for any workstation are:

- **Temperature:** 64°–80°F (18°–27°C). Monitor both intake and exhaust zones, not just ambient room temperature.
- **Humidity:** 40%–60%. Low humidity increases static electricity risk; high humidity promotes corrosion. A digital hygrometer is the appropriate tool for measurement.

If the machine has been running in an out-of-range environment, note it in your ticket before and after cleaning, and flag it to the responsible party if conditions cannot be corrected.

---

## Required Tools and Materials

- Compressed air (canned or electric duster)
- Isopropyl alcohol (90% or higher)
- Microfiber cloths
- Cotton swabs
- Soft-bristled brush
- Thermal paste
- Screwdriver set (Phillips and flathead)
- Anti-static wrist strap or anti-static mat
- Cable ties (optional)
- Camera or phone for documentation

---

## Safety and ESD Precautions

1. **Power down completely** and unplug the machine from the wall outlet.
2. **Discharge residual power** by pressing the power button several times after unplugging.
3. **Ground yourself.** Wear an anti-static wrist strap connected to a grounded surface, or touch a grounded metal object before handling components. Avoid wool or synthetic fabrics.
4. Work in a **well-ventilated area** — ideally outside or near an open window. Blowing dust indoors will redistribute it onto the machine and surrounding equipment.
5. **Document the machine's state** before disassembly with photos, especially cable routing and component seating. This is particularly important if the machine belongs to someone else or will be returned to a shared environment.

---

## Procedure

### 1. Prepare the Workspace

- Clear a large, flat surface and lay down an anti-static mat or clean towel.
- Have a container for screws and a trash bin nearby.
- Take reference photos of the interior before touching anything.

### 2. Open the Case

- Remove side panels (and front panel if needed for filter access).
- Set screws in a container — do not leave them loose on the work surface.
- Inspect the interior. Note the severity and location of dust accumulation before disturbing it.

### 3. Remove Major Components (if heavily soiled)

For machines with significant dust buildup, remove components for more thorough cleaning:

- GPU — disconnect power cables, release the PCIe retention clip, then lift straight out.
- RAM — press the retention clips simultaneously; the sticks will eject slightly.
- Storage drives — disconnect data and power cables; note which ports they were connected to.

Photograph or label each connection before removing.

### 4. Initial Dust Removal

- Hold compressed air **upright**, 6–8 inches from components. Use short bursts to avoid moisture buildup from propellant.
- Work **top to bottom** so dislodged dust falls downward rather than settling on already-cleaned components.
- **Hold fans still** while blowing — spinning a fan motor with air can generate back-voltage and damage it.
- Priority areas:
  - CPU cooler heatsink fins
  - GPU heatsink and fans
  - Case fans and grills
  - PSU vents (blow from inside outward if accessible)
  - Motherboard surface, VRM heatsinks, and around capacitors

### 5. Deep Clean Fans

- Remove case fans from their mounts.
- Wipe each blade with a microfiber cloth lightly dampened with isopropyl alcohol.
- Use cotton swabs for the hub and tight spaces between blades.
- Clean fan grills and any dust filters on the housing.
- Allow fans to dry completely before reinstalling.

### 6. Clean Dust Filters and Case Interior

- Remove all dust filters (front, top, bottom).
- Wash with water and mild soap, or vacuum gently with a soft brush attachment.
- Let filters **air dry completely** — do not reinstall damp filters.
- Wipe down interior case panels with a damp microfiber cloth.

### 7. Replace Thermal Paste on the CPU

Thermal paste degrades over time and should be replaced every **2–3 years**, or any time the cooler is removed. Also replace if paste appears dried, cracked, or discolored.

**Remove the cooler:**
1. Disconnect the fan cable from the CPU_FAN header.
2. Unscrew or unclip the cooler's mounting mechanism.
3. Gently twist the cooler left and right to break the thermal seal, then lift straight up. Never pry.

**Clean old paste:**
1. Apply isopropyl alcohol to a microfiber cloth or lint-free wipe.
2. Wipe the CPU IHS and cooler base until no paste remains.
3. Use cotton swabs for stubborn residue.
4. Confirm both surfaces are completely dry and lint-free before continuing.

**Apply new paste:**
1. Apply a small amount (rice grain or small pea size) to the center of the CPU.
2. Do **not** spread it manually — cooler pressure will distribute it evenly.
3. Less is more. Excess paste can migrate onto the socket and cause damage.

**Reinstall the cooler:**
1. Lower it straight down onto the CPU, aligning with mounting points.
2. Tighten mounting screws in an **X pattern** (diagonal corners), gradually and evenly.
3. Do not overtighten. Snug pressure is the goal.
4. Reconnect the fan cable to the CPU_FAN header.

### 8. Clean Remaining Components

- **GPU:** Compressed air on heatsink and fans; wipe the shroud with a damp microfiber cloth.
- **RAM:** Compressed air along the module surface and gold contacts.
- **Storage drives:** Wipe exterior with a dry cloth only — do not apply alcohol to drive housing.
- **Motherboard:** Compressed air across the PCB surface; soft brush for stubborn dust around capacitors and chipsets.

### 9. Reassemble

- Reinstall RAM — press firmly until both retention clips click.
- Reinstall GPU — lower into the PCIe slot until the retention clip engages.
- Reconnect all power cables (24-pin ATX, 8-pin CPU, PCIe, SATA) and data cables.
- Reinstall storage drives and confirm port connections match your reference photos.
- Reinstall case fans (verify airflow direction — fan label/sticker faces the direction air is pulled from).
- Reinstall dust filters.

### 10. Cable Management

- Route cables behind the motherboard tray where possible.
- Bundle excess cable runs with ties.
- Confirm no cables are near or contacting fans.
- A clean cable layout improves airflow and makes future service easier.

### 11. Final Inspection

Before closing the case, verify:

- [ ] All power connections are seated (24-pin, 8-pin CPU, PCIe)
- [ ] RAM is fully seated in both slots
- [ ] All fans can spin freely by hand
- [ ] No tools, screws, or loose cables inside the case

### 12. Test Boot

- Reattach side panels loosely — do not fully secure until the system is confirmed working.
- Reconnect power and peripherals.
- Power on and confirm POST completes.
- Enter BIOS and check CPU temperature at idle. Expected range: **30–45°C**.
- Listen for unusual noises (clicking, grinding, rattling).
- Confirm all fans are spinning.

If temperatures are unexpectedly high, verify cooler mounting before closing the case.

### 13. Close Up and Document

- Secure side panels once the system is confirmed operational.
- Wipe down the exterior with a damp microfiber cloth.
- Update the ticket with: work performed, pre/post temperatures if noted, thermal paste replaced (yes/no), and any environmental concerns flagged.

---

## Recommended Maintenance Schedule

| Task | Interval |
|---|---|
| Dust filters | Monthly |
| Light dusting (compressed air, no disassembly) | Every 3–6 months |
| Full deep clean | Every 6–12 months |
| Thermal paste replacement | Every 2–3 years |

Machines in dusty, high-traffic, or industrial environments should be cleaned more frequently. Machines running in environments outside the recommended temperature or humidity range should be flagged to facilities or management in addition to being serviced.

---

## Troubleshooting After Cleaning

| Symptom | Likely Cause |
|---|---|
| No power | PSU switch off, loose 24-pin or 8-pin connector, RAM not fully seated |
| No display | GPU not fully seated, PCIe power disconnected, monitor cable loose |
| High CPU temps | Cooler not properly mounted, fan header disconnected, insufficient thermal paste |
| Unusual noise | Cable contacting a fan, loose screw inside case, fan not secured in mount |

---

## Sources

- Walker. *CompTIA A+ Core 1 (220-1101) and Core 2 (220-1102).* Internal knowledge base reference.
- Kingston Technology. "How to Clean Your PC System." *Kingston Technology Blog*, September 2021. https://www.kingston.com/en/blog/gaming/how-to-clean-your-pc-system
