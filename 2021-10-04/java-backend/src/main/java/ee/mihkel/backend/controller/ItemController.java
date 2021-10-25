package ee.mihkel.backend.controller;

import ee.mihkel.backend.model.Item;
import ee.mihkel.backend.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Teeb beaniks, et oleks võimalik serveris kasutada seda classi
@RestController
// Võimaldab pääseda localhost:3000 aadressil meie API otsadele ligi
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    // seob ära ItemService classi, et oleks koguaeg ligipääs olemas
    // Singleton objekt (ei teki iga kord uut mälukohta)
    @Autowired
    ItemService itemService;

    // localhost:8080/items ja GET päring
    @GetMapping("items")
    public List<Item> getItems() {
        return itemService.getItems();
    }

    @PostMapping("items")
    public String postItem(@RequestBody Item item) {
        itemService.saveItem(item);
        return "Ese edukalt lisatud " + item.getName();
    }

    @DeleteMapping("delete-item/{id}")
    public List<Item> deleteItem(@PathVariable Long id) {
        itemService.deleteItem(id);
        return itemService.getItems();
    }

    @PostMapping("edit-item")
    public void editItem(@RequestBody Item item) {
        itemService.editItem(item);
    }

    @GetMapping("view-item/{id}")
    public Item getOneItem(@PathVariable Long id) throws Exception {
        return itemService.getOneItem(id);
    }

    //* Täna:
    //* andmebaas PostgreSQL -- relatsiooniline

    //* delete päringu
    //* edit päringu
    //* view one item päringu

    // Swagger

    // Järgmine kord:
    // frontendis kustuta päringu valmis
    // edit päring frontendis
    // view one item päring frontendis

    // custom exceptionite saatmine ??
    // cache backendis ??
    // ostukorvi lisada/eemaldada ???
}
