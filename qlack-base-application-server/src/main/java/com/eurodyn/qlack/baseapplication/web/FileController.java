package com.eurodyn.qlack.baseapplication.web;

import com.eurodyn.qlack.baseapplication.dto.FileDTO;
import com.eurodyn.qlack.baseapplication.model.File;
import com.eurodyn.qlack.baseapplication.service.FileService;
import com.eurodyn.qlack.util.querydsl.EmptyPredicateCheck;
import com.querydsl.core.types.Predicate;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.http.MediaType;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;

@Slf4j
@Validated
@RestController
@Transactional
@RequestMapping("/api/secured/file")
@RequiredArgsConstructor
public class FileController {

  @Autowired
  private final FileService fileService;

  @PostMapping(value = "/heartbeat", consumes = MediaType.APPLICATION_XML_VALUE)
  public void heartBeat(@RequestParam String content) {
    log.info("heartBeat has arrived! It's alive");
  }

  @PostMapping(value = "/upload")
  public void upload(@RequestParam String $uuid, @RequestParam Map<String, MultipartFile> fileMap) {
    MultipartFile[] files = fileMap.values().toArray(new MultipartFile[0]);

    try {

      // Get the file and save it somewhere
      byte[] bytes = files[0].getBytes();
      Path path = Paths.get("C://Temp//" + files[0].getOriginalFilename());
      Files.write(path, bytes);

    } catch (IOException e) {
      e.printStackTrace();
    }

  }

  @PostMapping
  public void upload(@RequestParam("file") MultipartFile file) {
    fileService.saveFile(file);
  }

  @GetMapping("/sorted")
  @EmptyPredicateCheck
  public List<FileDTO> findAll(@QuerydslPredicate(root = File.class) Predicate predicate,
      Sort sort) {
    return fileService.findAll(predicate, sort);
  }

  @GetMapping(path = "{fileId}", produces = MediaType.IMAGE_JPEG_VALUE)
  public @ResponseBody
  byte[] getImageWithMediaType(@Valid @PathVariable String fileId) throws IOException {
    return fileService.findFileById(fileId);
  }

}
